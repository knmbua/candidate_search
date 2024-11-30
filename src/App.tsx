import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Candidate } from './interfaces/Candidate.interface';
import Nav from './components/Nav';
import { searchGithub, searchGithubUser } from './api/API';

function App() {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Load saved candidates from local storage when the component mounts
    const savedCandidatesFromStorage = localStorage.getItem('savedCandidates');
    if (savedCandidatesFromStorage) {
      setSavedCandidates(JSON.parse(savedCandidatesFromStorage));
    }
  }, []);

  useEffect(() => {
    // Save candidates to local storage whenever the list changes
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  }, [savedCandidates]);

  useEffect(() => {
    // Call the searchGithub and searchGithubUser functions when the component mounts
    const fetchData = async () => {
      const users = await searchGithub();
      console.log(users);

      const user = await searchGithubUser('octocat');
      console.log(user);
    };
    fetchData();
  }, []);

  const handleSaveCandidate = (candidate: Candidate) => {
    setSavedCandidates([...savedCandidates, candidate]);
  };

  const handleRemoveCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.login !== login);
    setSavedCandidates(updatedCandidates);
  };

  return (
    <>
      <Nav />
      <main>
        <Outlet context={{ savedCandidates, onSaveCandidate: handleSaveCandidate, onRemoveCandidate: handleRemoveCandidate }} />
      </main>
    </>
  );
}

export default App;