import DashboardContainer from '../components/DashboardContainer';

export default function Forms() {
  return (
    <DashboardContainer>
      <div className='max-w-xs'>
        <h2 className='uppercase'>checkbox</h2>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>Remember me</span>
            <input type='checkbox' checked='checked' className='checkbox' />
          </label>
        </div>
        <input
          type='checkbox'
          checked='checked'
          className='checkbox checkbox-primary  checkbox-xs'
        />
        <input
          type='checkbox'
          checked='checked'
          className='checkbox checkbox-secondary checkbox-sm'
        />
        <input
          type='checkbox'
          checked='checked'
          className='checkbox checkbox-accent checkbox-md'
        />
        <input
          type='checkbox'
          className='checkbox checkbox-lg'
          disabled
          checked
        />
      </div>
      <div className='max-w-xs'>
        <h2 className='uppercase'>input</h2>
        <input type='text' placeholder='Text input' className='input w-full' />
        <input
          type='text'
          placeholder='Text input with border'
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Ghost (no background)'
          className='input input-ghost w-full max-w-xs'
        />
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Your email address</span>
            <span className='label-text-alt'>Alt label</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
          <label className='label'>
            <span className='label-text-alt'>Alt label</span>
            <span className='label-text-alt'>Alt label</span>
          </label>
        </div>
        <div>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered input-primary input-xs w-full max-w-xs'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered input-secondary input-sm w-full max-w-xs'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered input-accent input-md w-full max-w-xs'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered input-lg w-full max-w-xs'
            disabled
          />
        </div>
      </div>
      <div className='max-w-xs'>
        <h2 className='uppercase'>input</h2>
        <input type='radio' name='radio-1' className='radio' checked />
        <input type='radio' name='radio-1' className='radio' />
        <input
          type='radio'
          name='radio-2'
          className='radio radio-primary'
          checked
        />
        <input type='radio' name='radio-2' className='radio radio-primary' />
        <input
          type='radio'
          name='radio-3'
          className='radio radio-secondary'
          checked
        />
        <input type='radio' name='radio-3' className='radio radio-secondary' />
        <input
          type='radio'
          name='radio-4'
          className='radio radio-accent'
          checked
        />
        <input type='radio' name='radio-4' className='radio radio-accent' />
        <input type='radio' name='radio-5' className='radio' disabled checked />
        <input type='radio' name='radio-5' className='radio' disabled />
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>Red pill</span>
            <input
              type='radio'
              name='radio-6'
              className='radio checked:bg-red-500'
              checked
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>blue pill</span>
            <input
              type='radio'
              name='radio-6'
              className='radio checked:bg-blue-500'
              checked
            />
          </label>
        </div>
      </div>
    </DashboardContainer>
  );
}
