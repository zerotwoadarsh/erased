import {v} from 'convex/values'
import {mutation, query} from './_generated/server'

export const getUser = query({
    args:{
        email:v.string()
    },

    handler: async(ctx, args) => {
        const result = await ctx.db.query('user')
        .filter((q) => q.eq(q.field('email'),args.email))
        .collect()
    }
})

export const createUser = mutation({
    args:{
        name:v.string(),
        email:v.string(),
        image:v.string(),
    },
    handler:async(ctx: any, args: any)=>{
       return await ctx.db.insert("user", args)
    }
})
