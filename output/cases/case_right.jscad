function case_right_extrude_5_outline_fn(){
    return new CSG.Path2D([[250.525,-124],[255,-124]]).appendArc([257,-126],{"radius":2,"clockwise":true,"large":false}).appendPoint([257,-140]).appendArc([257.0304105,-140.4260728],{"radius":3,"clockwise":false,"large":false}).appendArc([256.975,-141],{"radius":3,"clockwise":false,"large":false}).appendPoint([256.975,-159]).appendArc([259.975,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([296.975,-162]).appendArc([297.4875,-161.9558998],{"radius":3,"clockwise":false,"large":false}).appendArc([298,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([316,-162]).appendArc([316.5,-161.9580399],{"radius":3,"clockwise":false,"large":false}).appendArc([317,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([335,-162]).appendArc([335.5,-161.9580399],{"radius":3,"clockwise":false,"large":false}).appendArc([336,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([354,-162]).appendArc([354.5,-161.9580399],{"radius":3,"clockwise":false,"large":false}).appendArc([355,-162],{"radius":3,"clockwise":false,"large":false}).appendPoint([373,-162]).appendArc([376,-159],{"radius":3,"clockwise":false,"large":false}).appendPoint([376,-141]).appendArc([375.9580399,-140.5],{"radius":3,"clockwise":false,"large":false}).appendArc([376,-140],{"radius":3,"clockwise":false,"large":false}).appendPoint([376,-122]).appendArc([375.9746528,-121.6108463],{"radius":3,"clockwise":false,"large":false}).appendArc([376.0375,-121],{"radius":3,"clockwise":false,"large":false}).appendPoint([376.0375,-103]).appendArc([375.9923555,-102.4815126],{"radius":3,"clockwise":false,"large":false}).appendArc([376.03125,-102],{"radius":3,"clockwise":false,"large":false}).appendPoint([376.03125,-84]).appendArc([375.9721803,-83.4076076],{"radius":3,"clockwise":false,"large":false}).appendArc([376,-83],{"radius":3,"clockwise":false,"large":false}).appendPoint([376,-65]).appendArc([373,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([355,-62]).appendArc([354.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([354,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([336,-62]).appendArc([335.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([335,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([317,-62]).appendArc([316.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([316,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([298,-62]).appendArc([297.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([297,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([279,-62]).appendArc([278.5,-62.0419601],{"radius":3,"clockwise":false,"large":false}).appendArc([278,-62],{"radius":3,"clockwise":false,"large":false}).appendPoint([260,-62]).appendArc([257,-65],{"radius":3,"clockwise":false,"large":false}).appendPoint([257,-79]).appendArc([255,-81],{"radius":2,"clockwise":true,"large":false}).appendPoint([245.7625,-81]).appendArc([242.7625,-84],{"radius":3,"clockwise":false,"large":false}).appendPoint([242.7625,-102]).appendArc([245.7625,-105],{"radius":3,"clockwise":false,"large":false}).appendPoint([247.525,-105]).appendPoint([247.525,-121]).appendArc([250.525,-124],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[364,-141],"radius":1.2})
.union(
    CAG.circle({"center":[295,-141],"radius":1.2})
).union(
    CAG.circle({"center":[369,-84],"radius":1.2})
).union(
    CAG.circle({"center":[264,-84],"radius":1.2})
)).extrude({ offset: [0, 0, 5] });
}




                function case_right_case_fn() {
                    

                // creating part 0 of case case_right
                let case_right__part_0 = case_right_extrude_5_outline_fn();

                // make sure that rotations are relative
                let case_right__part_0_bounds = case_right__part_0.getBounds();
                let case_right__part_0_x = case_right__part_0_bounds[0].x + (case_right__part_0_bounds[1].x - case_right__part_0_bounds[0].x) / 2
                let case_right__part_0_y = case_right__part_0_bounds[0].y + (case_right__part_0_bounds[1].y - case_right__part_0_bounds[0].y) / 2
                case_right__part_0 = translate([-case_right__part_0_x, -case_right__part_0_y, 0], case_right__part_0);
                case_right__part_0 = rotate([0,0,0], case_right__part_0);
                case_right__part_0 = translate([case_right__part_0_x, case_right__part_0_y, 0], case_right__part_0);

                case_right__part_0 = translate([0,0,0], case_right__part_0);
                let result = case_right__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_right_case_fn();
            }

        