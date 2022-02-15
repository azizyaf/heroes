import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

import styled from 'styled-components';
import Filters from '../components/layout/Filters';
import Table from '../components/layout/Table';
import Loader from '../components/layout/Loader';

import { getHeroes } from '../store/actions/heroesActions';
import { columns } from '../helpers/table';
import SearchInput from '../components/layout/SearchInput';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const isHeroesLoading = useSelector(state => state.heroes.isHeroesLoading);
  const heroes = useSelector(state => state.heroes.items);

  const expandRow = {
    renderer: row => (
      <div>
        <Button
          content='View Hero'
          secondary
          onClick={t => {
            router.push(`/${row.id}`);
          }}
        />
      </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b>-</b>;
      }
      return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return <b>-</b>;
      }
      return <b>...</b>;
    }
  };

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  if (isHeroesLoading) {
    return <Loader text='Heroes Loading' />;
  }

  return (
    <Container>
      <ToolkitProvider keyField='id' data={heroes} columns={columns} search>
        {props => (
          <>
            <Filters>
              <SearchInput {...props.searchProps} />
            </Filters>

            <Table>
              <BootstrapTable
                bootstrap4
                {...props.baseProps}
                expandRow={expandRow}
              />
            </Table>
          </>
        )}
      </ToolkitProvider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
