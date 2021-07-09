import React from 'react';
import { Button } from 'react-bootstrap';
import { sum } from 'lodash';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';
import '../../scss/NewAssessment.scss';

export const NewAssessment = () => {

  const { handleSubmit, register } = useForm();

  const onSubmit = async (assessment) => {
    const values = Object.values(assessment).map(score => Number(score));
    const total_score = sum(values);


    let risk_level;
    switch (total_score) {
      case 0:
      case 1:
        risk_level = `Low`;
        break;
      case 2:
      case 3:
        risk_level = `Medium`;
        break;
      case 4:
      case 5:
        risk_level = `High`;
        break;
      default:
        break;
    }

    let created_at = new Date();
    const dd = String(created_at.getDate()).padStart(2, `0`);
    const mm = String(created_at.getMonth() + 1).padStart(2, `0`);
    const yyyy = created_at.getFullYear();

    created_at = `${mm}/${dd}/${yyyy}`;

    const formatted_assessment = {
      created_at,
      risk_level,
      score: total_score,
    };

    await AssessmentService.submit(formatted_assessment);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >

      <div class="header">
        <h2>Cat Behavioral Instrument</h2>
      </div>

      <label htmlFor="Question">1. Previous contact with the Cat Judicial System?</label>
      <label htmlFor="Response1">Yes (score = 0)
        <input {...register(`Question 1`, { required: true })} type="radio" id="Response1" value={0} />
      </label>
      <label htmlFor="Response2">No (score = 1)
        <input {...register(`Question 1`, { required: true })} type="radio" id="Response2" value={1} />
      </label>

      <label htmlFor="Question">2. Physical altercations with other cats?</label>
      <label htmlFor="Response1">3+ altercations (score = 1)
        <input {...register(`Question 2`, { required: true })} type="radio" id="Response2" value={1} />
      </label>
      <label htmlFor="Response2">0-3 altercations (score = 0)
        <input {...register(`Question 2`, { required: true })} type="radio" id="Response1" value={0} />
      </label>

      <label htmlFor="Question">3. Physical altercations with owner? (scratching, biting, etc)</label>
      <label htmlFor="Response1">0-10 altercations (score = 0)
        <input {...register(`Question 3`, { required: true })} type="radio" id="Response1" value={0} />
      </label>
      <label htmlFor="Response2">10+ altercations (score = 1)
        <input {...register(`Question 3`, { required: true })} type="radio" id="Response2" value={1} />
      </label>

      <label htmlFor="Question">4. Plays well with dogs?</label>
      <label htmlFor="Response1">Yes (score = 0)
        <input {...register(`Question 4`, { required: true })} type="radio" id="Response1" value={0} />
      </label>
      <label htmlFor="Response2">No (score = 1)
        <input {...register(`Question 4`, { required: true })} type="radio" id="Response2" value={1} />
      </label>

      <label htmlFor="Question">5. Hisses at strangers?</label>
      <label htmlFor="Response1">Yes (score = 1)
        <input {...register(`Question 5`, { required: true })} type="radio" id="Response2" value={1} />
      </label>
      <label htmlFor="Response2">No (score = 0)
        <input {...register(`Question 5`, { required: true })} type="radio" id="Response1" value={0} />
      </label>

      <Button variant="primary" type="submit">Submit</Button>
    </form>
  );
};
