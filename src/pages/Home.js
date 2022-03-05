import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import { Flex, Heading, Text } from "@chakra-ui/react";
import ProfileCardModal from "../components/Profile/ProfileCardModal";
import QuizSetupModal from "../components/quiz/QuizSetupModal";
import QuizStartButton from "../components/quiz/QuizStartButton";
import Background from "../components/ui/Background";
import { useState } from "react";

const Home = () => {
  const [quizSetupModalIsOpen, setQuizSetupModalIsOpen] = useState(false);
  const onOpenQuizSetupModal = () => {
    setQuizSetupModalIsOpen(true);
  };

  useEffect(() => {
    //get other user data
    
    
  }, [input]);

  return (
    <Flex flexDir="column" justify="space-between" h="100%">
      <div>
        <Background>
          <Heading as="h1" textAlign="center">
            Welcome to TriviaChomp!
          </Heading>
          <Text textAlign="center" mt="10px">
            Today is a good day to do some trivia.
          </Text>
          <QuizSetupModal isOpen={quizSetupModalIsOpen} />
          <QuizStartButton onClick={onOpenQuizSetupModal} />
          <ProfileCardModal />
        </Background>
        <LeaderBoard />
      </div>
    </Flex>
  );
};

export default Home;
