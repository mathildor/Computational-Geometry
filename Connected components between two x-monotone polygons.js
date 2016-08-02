
var Polygons; //list of polygons in the intersection between two polygons
var upper; //Upper is the chain that will always be the upper part of the polygons
var uInd; //index for the upper chain
var i=1; j=1; //index chains
var parallel; //boolean variable about edges in chains
var startIntersectionFound=false; //Boolean variable to know if intersection found is the first or second of the polygon
var startIntersection; endIntersection; intersectionPoint;
var startI; startJ; //start index's of a new polygon
var firstIntersection=true; //Boolean variable to know if found intersection is the first one

function findIntersectionPolygons(U, L){

  //set upperChain of start
  if(isAbove(A[0], B[0])){
    Upper=A;
    uInd=i;
  }
  else{
    Upper=B;
    uInd=j;
  }

  //Find the polygons
  while(i<A.length() && j<B.length()){ //Until checked all the vertices

    if(intersection(A[i-1], A[i], B[j-1], B[j])){
      if(startIntersectionFound){
        if(changeUpperSlope()){
          startIntersectionFound=false;
        }else if(!parallel{//intersection in vertex, making endIntersection also a startIntersection for the next polygon
          startIntersectionFound=true;
          startIntersection= intersectionPoint;
        }
        endIntersection=intersectionPoint;
        makePolygon();
        polygons.add(activePolygon);
      }else if(changeUpperSlope()){ //startIntersection not found, first point in new polygon
        if(firstIntersection){//set upper chain again, because first intersection defines it
          if(isAbove(A[i],B[j])){
            upper=A;
            uInd=i;
          }else if(isAbove(B[j],A[i])){
            upper=B;
            uInd=j;
          }
          firstIntersection=false;
        }
        startI=i;
        startJ=j;
        startIntersection=intersectionPoint;
        startIntersectionFound=true;
      }
    }
    findNextVertex();
  }
}

//find upper chain for two input chains
function findUpperChain(A, B){
  var U;
  startI=0; startJ=0;
  //change upper each time an intersection that changes the upper chain
  //set upperChain of start
  if(isAbove(A[0], B[0])){
    Upper=A;
    uInd=i;
  }
  else{
    Upper=B;
    uInd=j;
  }
  while(i<A.length() && j<B.length()){
    if(intersection(A[i-1], A[i], B[j-1], B[j]) && changeUpperSlope()){
      //add upper chain from last intersection to this intersection
      if(upper==A){
        start=startI;
        end=A[i];
      }else{
        start=startJ;
        end=B[j];
      }
      for(ind=start; ind<end; ind++){
        U.add(upper(ind));
      }
      U.add(intersectionPoint);
      upper=B;
      startI=i;
      startJ=j;
    }
    findNextVertex();
  }
}

//function to save the polygons found correctly
function makePolygon(){
  activePolygon.clear;
  activePolygon.add(startIntersection);

  var startU; endU, startL, endL;
  if(upper==A){
    startU=startI;
    if(endIntersection==A[i-1]){
      endU=A[i-1];
    }else{
      endU=A[i];
    }
    startL=B[j-1];
    endL=startJ+1;
    lower=B;
  }else{
    startU=startJ;
    if(endIntersection==B[j-1]){
      endU=B[j-1];
    }else{
      endU=B[j];
    }
    startL=A[i-1];
    endL=startI+1;
    lower=A;
  }
  //Add upper chain
  for(ind=startU; ind<endU; ind++){
    activePolygon.add(upper(ind));
  }
  activePolygon.add(endIntersection);
  //Add lower chain
  for(ind=startL; ind<endU; ind--){
    activePolygon.add(lower(ind));
  }
}

//function to check if upper chain is changed because of intersection
function changeUpperSlope(){
  if(upper chain has slope that increases more or decreases less than the other chain){
    parallel=false;
    return true;
  }else if(similar slope){//parallel chains
    parallel=true;
    return false;
  }else{
    parallel=false;
    return false;
  }
}

//Increase the index for the chain that contains the next unvisited vertex with the smallest x-value
function findNextVertex(){
  //next vertex is always the next x-value
  if(isBefore(A[i], B[j])){
    i++;
  }
  else{
    j++;
  }
}

//check if p1 as above (higher y-value) p2
function isAbove(p1, p2){
  if(p1[1]>p2[1]){
    return true;
  }
  else{
    return false;
  }
}

//check if p1 is before (has lower x-value) than p2
function isBefore(p1, p2){
  if (p1[0]<p2[0]){
    return true;
  }
  else{
    return false;
  }
}

//checks for intersection, and returns true if: intersection between endpoint-edge, endpoint-endpoint or edge-edge
//sets also the value for the intersectionPoint, if an intersection exist
function intersection(a1, a2, b1, b2){
  if(intersection){
    intersectionPoint=intersection;
    return true;
  }
  else{
    return false;
  }
}
