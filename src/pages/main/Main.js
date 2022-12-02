import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  const [, setOriginData] = useState();
  const [showData, setShowData] = useState();
  const [dataSort, setDataSort] = useState({});

  const navigate = useNavigate('');
  const goGraph = () => {
    navigate('/graph');
  };

  useEffect(() => {
    fetch('data/dataList.json')
      .then((res) => res.json())
      .then((data) => {
        setOriginData(
          data.data.map((el, i) => {
            return { name: el.thingName, id: i + 1, ...el.shadow };
          }),
        );
        setShowData(
          data.data.map((el, i) => {
            return { name: el.thingName, id: i + 1, ...el.shadow };
          }),
        );
        let obj = {};
        ['id', 'name', ...Object.keys(data.data[0].shadow)].forEach((el) => {
          return (obj[el] = false);
        });
        setDataSort(obj);
      });
  }, []);

  const handleSortData = (e) => {
    const id = e.target.id;
    const selecKey = Object.keys(dataSort).filter((el) => el === id)[0];
    const newSortData = { [selecKey]: !dataSort[selecKey] };
    setDataSort((prev) => {
      return Object.assign(dataSort, newSortData);
    });
    const newShowData = [...showData].sort((a, b) => {
      return newSortData[selecKey] ? b[id] - a[id] : a[id] - b[id];
    });
    setShowData(newShowData);
  };

  return (
    <Container>
      <div className='btnContainer'>
        <div className='maxContainer'>
          <button onClick={goGraph}>GRAPH</button>
          <h2>MAIN</h2>
        </div>
      </div>
      <table className='table'>
        <thead className='tableHead'>
          <tr>
            <th onClick={handleSortData} id='id'>
              No.
            </th>
            <th onClick={handleSortData} id='name'>
              Name
            </th>
            <th onClick={handleSortData} id='batLvl'>
              Battery
            </th>
            <th onClick={handleSortData} id='connAt'>
              Connected at
            </th>
            <th onClick={handleSortData} id='connCardNum'>
              Card No.
            </th>
            <th onClick={handleSortData} id='connGW'>
              Gateway
            </th>
            <th onClick={handleSortData} id='disconnAt'>
              Disconnected at
            </th>
            <th onClick={handleSortData} id='disconnReason'>
              Reason
            </th>
            <th onClick={handleSortData} id='fwVer'>
              FwVer
            </th>
            <th onClick={handleSortData} id='hwVer'>
              HwVer
            </th>
            <th onClick={handleSortData} id='rawSentCnt'>
              RawSentCnt
            </th>
            <th onClick={handleSortData} id='remainData'>
              Remain Data
            </th>
            <th onClick={handleSortData} id='rssi'>
              RSSI
            </th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {showData?.map((data) => {
            return (
              <tr key={data.name}>
                <td className='id'>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.batLvl}</td>
                <td>{data.connAt}</td>
                <td>{data.connCardNum}</td>
                <td>{data.connGW}</td>
                <td>{data.disconnAt}</td>
                <td>{data.disconnReason}</td>
                <td>{data.fwVer}</td>
                <td>{data.hwVer}</td>
                <td>{data.rawSentCnt}</td>
                <td>{data.remainData}</td>
                <td>{data.rssi}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  .btnContainer {
    width: 100%;
    background-color: ${({ theme }) => theme.mainBlue};
    padding: 20px 28px;

    .maxContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;

      h2 {
        color: #fff;
        font-size: 1.563rem;
        font-weight: 700;
      }

      button {
        color: white;
        margin-right: 1.563rem;
        border: 2px solid #fff;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.mainBlue};
        font-weight: 700;
        font-size: 1rem;
        &:active {
          background-color: #fff;
          color: ${({ theme }) => theme.mainBlue};
        }
      }
    }
  }

  .table {
    width: 100%;
    margin: 0 auto;

    .tableHead {
      background-color: #eee;
      color: ${({ theme }) => theme.mainBlue};

      th {
        padding: 10px;
        border-top: 1px solid #eee;
        border-right: 1px solid #fff;
        font-weight: 700;
        vertical-align: middle;
        cursor: pointer;
      }
    }

    .tableBody {
      width: 100%;
    }

    .id {
      font-weight: 700;
    }

    tr {
      border-bottom: 1px solid #eee;

      &:first-child {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }

      &:last-child {
        border: none;
      }

      &:hover {
        background-color: #eee;
        color: ${({ theme }) => theme.mainBlue};
        border: 1px solid #fff;

        td {
          border-right: 1px solid #fff;
        }
      }

      td {
        padding: 10px 5px;
        border-right: 1px solid #eee;
        text-align: center;
        vertical-align: middle;
      }
    }
  }
`;
