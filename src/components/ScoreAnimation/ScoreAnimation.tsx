import { motion, AnimatePresence } from 'framer-motion';
import cls from './ScoreAnimation.module.css';

type ScoreAnimationProps = {
  homeScore: number;
  awayScore: number;
};
function ScoreAnimation({ homeScore, awayScore }: ScoreAnimationProps) {
  return (
    <div className={cls.score}>
      <AnimateScore score={homeScore} />
      <span>:</span>
      <AnimateScore score={awayScore} />
    </div>
  );
}

type AnimateScoreProps = {
  score: number;
};

function AnimateScore({ score }: AnimateScoreProps) {
  return (
    <div style={{ position: 'relative', width: '30px', height: '30px', overflow: 'hidden' }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={score}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {score}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ScoreAnimation;
