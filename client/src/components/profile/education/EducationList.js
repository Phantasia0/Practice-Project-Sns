import React from 'react';
// import { ListGroup, Badge } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const dummy = [
  {
    school: '내 학교',
    major: '내 전공',
    state: '내 현재 상태',
  },
];

const EducationList = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>내 학교</Card.Text>
        <Card.Text>우리전공(박사졸업)</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationList;
