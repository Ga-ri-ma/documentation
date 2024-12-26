I have used this library at my project I am facing an issue in this particular method -
    redrawLines(_animate = this.animate) {

        this.linkElements.forEach(linkEl => {

            const edge = this.graph.edges.find(lin => lin.id === linkEl.nativeElement.id);

            if (edge) {

                const linkSelection = select(linkEl.nativeElement).select('.line');

                linkSelection

                    .attr('d', edge.oldLine)

                    .transition()

                    .ease(ease.easeSinInOut)

                    .duration(_animate ? 500 : 0)

                    .attr('d', edge.line);

                const textPathSelection = select(this.el.nativeElement).select(`#${edge.id}`);

                textPathSelection

                    .attr('d', edge.oldTextPath)

                    .transition()

                    .ease(ease.easeSinInOut)

                    .duration(_animate ? 500 : 0)

                    .attr('d', edge.textPath);

                this.updateMidpointOnEdge(edge, edge.points);

            }

        });

    }
initally I have used the version - 8.4.0 in that at the same function I am getting an error this - TypeError: linkSelection.attr(...).transition is not a function
So, I have decided to upgrade the version of swimlane but when i have updated it my graph view page is went on Fluctating (means some times the graph have coming in proper way but after some time the whole graph is not visible)
and I am using this swimlane library with angular 18 version.
