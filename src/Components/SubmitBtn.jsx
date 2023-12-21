import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary rounded-[4px] text-white btn-block capitalize'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}

export default SubmitBtn