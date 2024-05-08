import styles from './components-common.module.css';

/* eslint-disable-next-line */
export interface ComponentsCommonProps {}

export function ComponentsCommon(props: ComponentsCommonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ComponentsCommon!</h1>
    </div>
  );
}

export default ComponentsCommon;
