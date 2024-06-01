var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import inquirer from "inquirer";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns";
// Função para renderizar o calendário no terminal
function renderCalendar() {
    var now = new Date();
    var start = startOfMonth(now);
    var end = endOfMonth(now);
    var days = eachDayOfInterval({ start: start, end: end });
    var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthDays = [];
    // Renderiza os dias da semana
    monthDays.push(weekDays.join(" "));
    // Renderiza os dias do mês
    var currentWeek = Array(getDay(start)).fill("   ");
    days.forEach(function (day) {
        currentWeek.push(day.getDate().toString().padStart(2, " ") + " ");
        if (currentWeek.length === 7) {
            monthDays.push(currentWeek.join(" "));
            currentWeek = [];
        }
    });
    if (currentWeek.length > 0) {
        monthDays.push(currentWeek.join(" "));
    }
    console.log("\n".concat(format(now, "MMMM yyyy"), "\n"));
    monthDays.forEach(function (week) { return console.log(week); });
}
// Função para perguntar ao usuário qual dia ele quer selecionar
function selectDay() {
    return __awaiter(this, void 0, void 0, function () {
        var now, start, end, days, choices, answers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    now = new Date();
                    start = startOfMonth(now);
                    end = endOfMonth(now);
                    days = eachDayOfInterval({ start: start, end: end });
                    choices = days.map(function (day) { return ({
                        name: format(day, "do MMMM yyyy"),
                        value: day
                    }); });
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: "list",
                                name: "selectedDay",
                                message: "Selecione um dia:",
                                choices: choices
                            },
                        ])];
                case 1:
                    answers = _a.sent();
                    return [2 /*return*/, answers.selectedDay];
            }
        });
    });
}
// aD => ask date
function aD() {
    return __awaiter(this, void 0, void 0, function () {
        var selectedDay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    renderCalendar();
                    return [4 /*yield*/, selectDay()];
                case 1:
                    selectedDay = _a.sent();
                    console.log("Voc\u00EA selecionou: ".concat(format(selectedDay, "do MMMM yyyy")));
                    return [2 /*return*/];
            }
        });
    });
}
