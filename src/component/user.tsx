import React from 'react';
import styled from 'styled-components';

interface UserProps {
    data: {
        name: string;
        idle: number;
    };
}
const User = ({ data }: any) => {
    return (
        <div>
            {data.map((user: { name: string; id: number }) => {
                return (
                    <UserLayout>
                        <input type="checkbox" />
                        <div>
                            {user.id} {user.name}
                        </div>
                    </UserLayout>
                );
            })}
        </div>
    );
};
const UserLayout = styled.div`
    display: flex;
`;
export default User;
