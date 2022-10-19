import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Layout from './components/layouts/Layout';
import Main from './pages/Main'
import MemberList from './pages/member/MemberList';
import MemberWrite from './pages/member/MemberWrite';
import MemberView from './pages/member/MemberView';
import MemberEdit from './pages/member/MemberEdit';
import MemberInbody from './pages/member/MemberInbody';
import TrainerWrite from './pages/trainer/TrainerWrite';
import TrainerView from './pages/trainer/TrainerView';
import TrainerEdit from './pages/trainer/TrainerEdit';
import FeedbackWorkout from './pages/feedback/FeedbackWorkout';
import FeedbackDiet from './pages/feedback/FeedbackDiet';
import Notification from './pages/notification/Notification';
import QnAList from './pages/QnA/QnAList';
import QnAView from './pages/QnA/QnAView';


function App() {

  return (
    <Layout>
      <Container style={{ minHeight: "80vh", marginTop: "50px" }}>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/memberList' element={<MemberList />} />
          <Route exact path='/memberView/:id' element={<MemberView />} />
          <Route exact path='/memberEdit/:id' element={<MemberEdit />} />
          <Route exact path='/memberDelete/:id' element={<MemberList />} />
          <Route exact path='/memberWrite' element={<MemberWrite />} />
          <Route exact path='/memberInbody' element={<MemberInbody />} />
          <Route exact path='/trainerWrite' element={<TrainerWrite />} />
          <Route exact path='/trainerView/:id' element={<TrainerView />} />
          <Route exact path='/trainerEdit/:id' element={<TrainerEdit />} />
          <Route exact path='/feedbackWorkout/:id' element={<FeedbackWorkout />} />
          <Route exact path='/feedbackWorkout/:id&/:seq' element={<FeedbackWorkout />} />
          <Route exact path='/feedbackDiet/:id' element={<FeedbackDiet />} />
          <Route exact path='/feedbackDiet/:id&/:seq' element={<FeedbackDiet />} />
          <Route exact path='/QnAList' element={<QnAList />} />
          <Route exact path='/QnAView/:seq' element={<QnAView />} />
          <Route exact path='/notification' element={<Notification />} />

          {/* <Route exact path='/counter' element={<Counter />}></Route>
          <Route exact path='/post/postsList' element={<PostsList />}></Route>
          <Route exact path='/post/addPostForm' element={<AddPostForm />}></Route>
          <Route exact path='/post/edit/:postId' element={<EditPostForm />}></Route>
          <Route exact path='/post/:postId' element={<SinglePostPage />}></Route>
          <Route exact path='/user/usersList' element={<UsersList />}></Route>
          <Route exact path='/user/:userId' element={<UserPage />}></Route> */}
        </Routes>
      </Container>
    </Layout >
  );
}

export default App;