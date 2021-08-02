<template>
    <div class="container">
        <div class="inputs">
            <v-input v-model.number="numOfCircles" />
            <v-button class="sorted-btn" @click="sort = !sort">
                Отсортировать по цветам
            </v-button>
        </div>
        <div class="wrapper">
            <transition-group name="circles">
                <v-circle v-for="circ in sortedCircles" :key="circ.id" :circle="circ" />
            </transition-group>
        </div>
    </div>
</template>

<script>
import VInput from "@/components/UI/VInput";
import VButton from "@/components/UI/VButton";
import VCircle from "@/components/Test2/Circle";
import {getRandomColor, splitRgb} from "@/components/util/util";

export default {
    name: "Test2",
    components: {
        VInput,
        VButton,
        VCircle,
    },
    data: () => ({
        numOfCircles: 0,
        circles: [],
        sort: false,
        colors: [
            "rgb(204, 204, 0)",
            "rgb(153, 102, 0)",
            "rgb(102, 0, 0)",
            "rgb(255, 102, 0)",
            "rgb(153, 0, 0)",
            "rgb(255, 0, 102)",
            "rgb(102, 0, 51)",
            "rgb(255, 102, 255)",
            "rgb(153, 0, 153)",
            "rgb(51, 0, 153)",
            "rgb(51, 102, 255)",
            "rgb(0, 51, 51)",
            "rgb(0, 102, 0)",
            "rgb(102, 102, 102)",
        ],
    }),
    computed: {
        sortedCircles() {
            const newCircles = [...this.circles].sort((circle1, circle2) => {
                const color1 = splitRgb(circle1.color);
                const color2 = splitRgb(circle2.color);
                if (this.sort) {
                    if (+color1 < +color2) return 1;
                    if (+color1 > +color2) return -1;
                    else return 0;
                }
            });
            return newCircles;
        }
    },
    methods: {
        setCircles(circles) {
            this.circles = circles;
        },
        sortCircles() {
            this.sort = !this.sort;
        },
        fetchCircles() {
            const circles = [];

            for (let i = 0; i < +this.numOfCircles; i++) {
                const obj = {
                    id: i,
                    color: getRandomColor(this.colors),
                };
                circles.push(obj);
            }

            this.setCircles(circles);
        },
    },
    watch: {
        numOfCircles() {
            this.fetchCircles();
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 0 auto;
}
.inputs {
    display: flex;
    justify-content: center;
    margin: 50px 0;

    .sorted-btn {
        margin-left: 10px;
    }
}
.wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.circles-item {
    display: inline-block;
    margin-right: 10px;
}
.circles-enter-active,
.circles-leave-active {
    transition: all 0.4s ease;
}
.circles-enter-from,
.circles-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

.circles-move {
    transition: transform 0.4s ease;
}
</style>
