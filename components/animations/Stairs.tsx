import { motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },

  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1; //n-i-1
};

const Stairs = () => {
  return (
    <>
      {/* 6 motion divs, each representing a step 
        The delay for each div will be calculated dynamically
        based on it's reversed index, creating a staggerig effect  
  */}

      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        ></motion.div>
      ))}
    </>
  );
};

export default Stairs;
