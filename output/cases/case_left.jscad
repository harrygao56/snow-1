function case_left_extrude_5_outline_fn(){
    return new CSG.Path2D([[91,-162],[109,-162]]).appendArc([109.5,-161.9580399],{"radius":3,"clockwise":false,"large":false}).appendArc([110,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([128,-162]).appendArc([128.5,-161.9580399],{"radius":3,"clockwise":false,"large":false}).appendArc([129,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([147,-162]).appendArc([147.5,-161.9580399],{"radius":3,"clockwise":false,"large":false}).appendArc([148,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([166,-162]).appendArc([166.5,-161.9580399],{"radius":3,"clockwise":false,"large":false}).appendArc([167,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([185,-162]).appendArc([185.5125,-161.9558998],{"radius":3,"clockwise":false,"large":false}).appendArc([186.025,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([223.025,-162]).appendArc([226.025,-159],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.025,-141]).appendArc([225.9945895,-140.5739272],{"radius":3,"clockwise":false,"large":false}).appendArc([226.05,-140],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.05,-122]).appendArc([223.05,-119],{"radius":3,"clockwise":false,"large":false}).appendPoint([218.525,-119]).appendArc([216.525,-117],{"radius":2,"clockwise":true,"large":false}).appendPoint([216.525,-103]).appendArc([213.525,-100],{"radius":3,"clockwise":false,"large":false}).appendPoint([211.7625,-100]).appendPoint([211.7625,-88]).appendArc([213.7625,-86],{"radius":2,"clockwise":true,"large":false}).appendPoint([223,-86]).appendArc([226,-83],{"radius":3,"clockwise":false,"large":false}).appendPoint([226,-65]).appendArc([223,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([205,-62]).appendArc([204.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([204,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([186,-62]).appendArc([185.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([185,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([167,-62]).appendArc([166.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([166,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([148,-62]).appendArc([147.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([147,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([129,-62]).appendArc([128.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([128,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([110,-62]).appendArc([109.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([109,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([91,-62]).appendArc([88,-65],{"radius":3,"clockwise":false,"large":false}).appendPoint([88,-83]).appendArc([88.0451445,-83.5184874],{"radius":3,"clockwise":false,"large":false}).appendArc([88.00625,-84],{"radius":3,"clockwise":false,"large":false}).appendPoint([88.00625,-102]).appendArc([88.0513945,-102.5184874],{"radius":3,"clockwise":false,"large":false}).appendArc([88.0125,-103],{"radius":3,"clockwise":false,"large":false}).appendPoint([88.0125,-121]).appendArc([88.0609478,-121.5369725],{"radius":3,"clockwise":false,"large":false}).appendArc([88.025,-122],{"radius":3,"clockwise":false,"large":false}).appendPoint([88.025,-140]).appendArc([88.0554105,-140.4260728],{"radius":3,"clockwise":false,"large":false}).appendArc([88,-141],{"radius":3,"clockwise":false,"large":false}).appendPoint([88,-159]).appendArc([91,-162],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[188.05,-141],"radius":1.2})
.union(
    CAG.circle({"center":[95,-140],"radius":1.2})
).union(
    CAG.circle({"center":[209,-84],"radius":1.2})
).union(
    CAG.circle({"center":[95,-84],"radius":1.2})
)).extrude({ offset: [0, 0, 5] });
}




                function case_left_case_fn() {
                    

                // creating part 0 of case case_left
                let case_left__part_0 = case_left_extrude_5_outline_fn();

                // make sure that rotations are relative
                let case_left__part_0_bounds = case_left__part_0.getBounds();
                let case_left__part_0_x = case_left__part_0_bounds[0].x + (case_left__part_0_bounds[1].x - case_left__part_0_bounds[0].x) / 2
                let case_left__part_0_y = case_left__part_0_bounds[0].y + (case_left__part_0_bounds[1].y - case_left__part_0_bounds[0].y) / 2
                case_left__part_0 = translate([-case_left__part_0_x, -case_left__part_0_y, 0], case_left__part_0);
                case_left__part_0 = rotate([0,0,0], case_left__part_0);
                case_left__part_0 = translate([case_left__part_0_x, case_left__part_0_y, 0], case_left__part_0);

                case_left__part_0 = translate([0,0,0], case_left__part_0);
                let result = case_left__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_left_case_fn();
            }

        