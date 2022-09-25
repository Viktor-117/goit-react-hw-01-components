import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from './user.json';
import data from './data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#EFF3F6',
      }}
    >
      <Profile key={user.username} user={user} />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
