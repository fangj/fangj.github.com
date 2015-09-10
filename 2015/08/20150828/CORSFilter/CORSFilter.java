package com.dreamvoc.microcard.common.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by fangjian on 14-11-7.
 */
public class CORSFilter implements javax.servlet.Filter{
    public CORSFilter() { }

    public void init(FilterConfig fConfig) throws ServletException { }

    public void destroy() {    }

    public void doFilter(
            ServletRequest request, ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        ((HttpServletResponse)response).addHeader(
                "Access-Control-Allow-Origin", "*"
        );
         ((HttpServletResponse)response).addHeader(
                "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
        );
        ((HttpServletResponse)response).addHeader(
                "Access-Control-Allow-Credentials", "true" // qwest.get(url, null, { withCredentials: true }); //允许跨域设置cookie
        );
        ((HttpServletResponse)response).addHeader(
                "Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS"
        );
        chain.doFilter(request, response);
    }
}


###参考

<http://www.ituring.com.cn/article/128530>