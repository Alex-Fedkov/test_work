import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/operations';
import { selectMyFollowers, selectUsers, selectPage } from 'redux/selectors';
import { useEffect } from 'react';
import { addFollower, removeFollower } from 'redux/myFollowersSlice';
import {
  Ul,
  Item,
  Image,
  Tweet,
  Follower,
  ButtonAddFollower,
  ButtonRemoveFollower,
  ButtonLoadMore,
} from './styles';

const UserList = () => {
  const users = useSelector(selectUsers);
  const myFollowers = useSelector(selectMyFollowers);
  const page = useSelector(selectPage);

  console.log('page', page);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onAddFollower = id => {
    dispatch(addFollower(id));
  };

  const onRemoveFollower = id => {
    dispatch(removeFollower(id));
  };

  const onLoadMore = () => {
    dispatch(fetchUsers(page));
  };

  return (
    <>
      <div>
        <Ul>
          {users.map(({ id, avatar, tweets, followers }) => {
            const isInFollowers = myFollowers.some(
              followerId => followerId === id
            );

            let userFollowers = followers;
            if (isInFollowers) {
              userFollowers += 1;
            }

            return (
              <Item key={id}>
                <Image src={`${avatar}`} alt="avatar" width={62} height={62} />
                <Tweet>{tweets} tweets</Tweet>
                <Follower>
                  {userFollowers.toLocaleString('en')} followers
                </Follower>
                {isInFollowers ? (
                  <ButtonRemoveFollower
                    type="button"
                    onClick={() => onRemoveFollower(id)}
                  >
                    FOLLOWING
                  </ButtonRemoveFollower>
                ) : (
                  <ButtonAddFollower
                    type="button"
                    onClick={() => onAddFollower(id)}
                  >
                    FOLLOW
                  </ButtonAddFollower>
                )}
              </Item>
            );
          })}
        </Ul>
        <ButtonLoadMore onClick={onLoadMore}>Load More</ButtonLoadMore>
      </div>
    </>
  );
};

export default UserList;
