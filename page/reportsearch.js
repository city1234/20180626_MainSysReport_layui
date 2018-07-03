layui.use(['form', 'layer', 'laydate', 'table', 'laytpl'], function() {
        var form = layui.form,
            layer = parent.layer === undefined ? layui.layer : top.layer,
            $ = layui.jquery,
            laydate = layui.laydate,
            laytpl = layui.laytpl,
            table = layui.table;
        //datepicker
        var laydate = layui.laydate;
        laydate.render({
            elem: '#test16'
            , type: 'datetime'
            , range: '-'
            , format: 'yyyy/mm/dd HH:mm:ss'
        });
        //平台数据
        var tableIns = table.render({
            elem: '#platformoption',
            url: '../../json/platformoption.json',
            cellMinWidth: 50,
            page: false,
            id: "platformoption",
            cols: [
                [
                    //uifix_104 修正為固定寬度及直屬代理更名
                    { field: 'platformoptionName', title: '', align: "left", width: 130 },
                    { field: 'platformoptionLottery', title: '彩票', align: "center", templet: '#platformoptionLottery'},
                    { field: 'platformoptionVideo', title: '视讯', align: "center", templet: '#platformoptionVideo'},
                    { field: 'platformoptionEle', title: '电子', align: "center", templet: '#platformoptionEle' },
                    { field: 'platformoptionSport', title: '体育', align: 'center', templet: '#platformoptionSport' },
                    { field: 'platformoptionCard', title: '棋牌', align: "center", templet: '#platformoptionCard' },
                    { field: 'platformoptionThreed', title: '3D', align: "center", templet: '#platformoptionThreed' },
                    { field: 'platformoptionFish', title: '捕鱼', align: "center", templet: '#platformoptionFish' }
                ]
            ]
        });
        //平台数据
        var tableIns = table.render({
            elem: '#reportsearch',
            url: '../../json/reportsearch.json',
            cellMinWidth: 95,
            page: true,
            //height: "full-125",
            limit: 10,
            limits: [10, 50],
            id: "reportsearch",
            cols: [
                [
                    //uifix_104 修正為固定寬度及直屬代理更名
                    { field: 'reportId', title: '序号', align: "center",width: 90 },
                    { field: 'reportPlant', title: '游戏平台', align: "center" },
                    { field: 'reportQuantity', title: '注单量', align: "center" },
                    { field: 'reportAmount', title: '下注金额', align: "center" },
                    { field: 'reportEffective', title: '有效投注额', align: 'center' },
                    { field: 'reportBreakeven', title: '盈亏', align: "center"}, 
                    { field: 'reportPool', title: '累计奖池', align: "center" },
                    { field: 'reportBonus', title: '累计彩金', align: "center" },
                    { field: 'reportJackpot', title: 'Jackpot交收', align: 'center' }
                ]
            ]
        });
    })