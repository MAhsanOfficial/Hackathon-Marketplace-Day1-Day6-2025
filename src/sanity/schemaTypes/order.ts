
export default {
    name:"order",
    type:"document",
    title:"Order",
    fields:[
        {
            name:'firstName',
            title:'First Name',
            type:'string',
        },
        {
            name:'lastName',
            title:'Last Name',
            type:'string',
        },
        {
            name:'address',
            title:'Address',
            type:'string',
        },
        {
            name:'city',
            title:'City',
            type:'string',
        },
        {
            name:'zipCode',
            title:'Zip Code',
            type:'string',
        },
        {
            name:"phone",
            title:"Phone",
            type:"string",
        },
        {
            name:'email',
            title:'Email',
            type:'string',
        },
        {
            name:'discount',
            type:'number',
            title:'Discount',
        },
        {
            name:'cartItems',
            title:'Cart Items',
            type:'array',
            of:[{type:'reference',to:{type:'products'}}]
        },
        {
            name:'total',
            title:'Total',
            type:'number',
        },
        {
            name:'status',
            title:'Order Status',
            type:'string',
            options:{
                list:[
                    {title:'Pending',valu:'pending'},
                    {title:'Success',valu:'success'},
                    {title:'Dispatch',valu:'dispatch'},
                 ],
                 layout:'radio'
            },
            initialValue:'pending'
        },
    ]
};