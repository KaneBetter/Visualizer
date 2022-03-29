import React from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js';

var NUMBER_OF_ARRAY_BARS = 200;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

const ANIMATION_SPEED_MS = 2;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
          array.push(randomIntFromInterval(5, 700));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = SortingAlgorithms.getMergeSortAnimations(this.state.array)[0];
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const animations = SortingAlgorithms.getQuickSortAnimations(this.state.array)[0];
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4;
            if (isColorChange < 2) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    
    heapSort() {
        const animations = SortingAlgorithms.getHeapSortAnimations(this.state.array)[0];
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4;
            if (isColorChange < 2) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    
    bubbleSort() {
        const animations = SortingAlgorithms.getBubbleSortAnimations(this.state.array)[0];
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4;
            if (isColorChange < 2) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const mergeSortedArray = SortingAlgorithms.getBubbleSortAnimations(array.slice())[1];
          console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
      }

    changeSize() {
        const size = document.getElementsByClassName("form-range");
        NUMBER_OF_ARRAY_BARS = size["changeSize"].value;
        this.resetArray();
    }
    

    render() {
        const { array } = this.state;

        return (
            <>
                <div className="bg-primary flex-column flex-sm-row">
                    <input type="range" min="1" max="250" id="changeSize" className='form-range' onInput={() => this.changeSize()}></input>
                    <button type="button" className="btn btn-primary" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
                </div>
                <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style = {{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}>    
                </div>
            ))}
            </div> 
            </>
             
        );
    }


}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

