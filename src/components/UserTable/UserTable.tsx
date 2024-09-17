import React from 'react'
import { Cell, Column, ResizableTableContainer, Row, Table, TableBody, TableHeader } from 'react-aria-components'

const UserTable = ({ users }: any) => {
    return (
        <ResizableTableContainer>
            <Table>
                <TableHeader>
                    <Column isRowHeader>Name</Column>
                    <Column>Email</Column>
                    <Column>Phone</Column>
                </TableHeader>
                <TableBody>
                    {users.map((user: any) => (
                        <Row key={user.id}>
                            <Cell>{user.name}</Cell>
                            <Cell>{user.email}</Cell>
                            <Cell>{user.phone}</Cell>
                        </Row>
                    ))}
                </TableBody>
            </Table>
        </ResizableTableContainer>
    )
}

export default UserTable