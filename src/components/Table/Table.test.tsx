import { render, screen } from '@testing-library/react';

import Table from './Table';

describe('Table', () => {
  it('should return a table element', () => {
    render(<Table />);

    const table = screen.getByRole('table');

    expect(table).toBeInTheDocument();
  });

  it('should return a table element with a thead', () => {
    render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>some head</Table.HeadCell>
          </Table.Row>
        </Table.Head>
      </Table>
    );

    const table = screen.getByRole('table');
    const tableHead = screen.getByRole('rowgroup', { name: 'table head' });
    const tableRow = screen.getByRole('row', { name: 'some head' });
    const tableColumnHeader = screen.getByRole('columnheader', {
      name: 'some head',
    });

    expect(table).toBeInTheDocument();
    expect(tableHead).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
    expect(tableColumnHeader).toBeInTheDocument();
  });

  it('should return a table element with a tbody', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>some text</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    const table = screen.getByRole('table');
    const tableBody = screen.getByRole('rowgroup', { name: 'table body' });
    const tableRow = screen.getByRole('row', { name: 'some text' });
    const tableCell = screen.getByRole('cell', {
      name: 'some text',
    });

    expect(table).toBeInTheDocument();
    expect(tableBody).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
    expect(tableCell).toBeInTheDocument();
  });

  it('should return a table element with a tfoot', () => {
    render(
      <Table>
        <Table.Foot>
          <Table.Row>
            <Table.Cell>some foot</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );

    const table = screen.getByRole('table');
    const tableFoot = screen.getByRole('rowgroup', { name: 'table foot' });
    const tableRow = screen.getByRole('row', { name: 'some foot' });
    const tableCell = screen.getByRole('cell', {
      name: 'some foot',
    });

    expect(table).toBeInTheDocument();
    expect(tableFoot).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
    expect(tableCell).toBeInTheDocument();
  });
});
