package com.itingchunyu.reactnative;

import android.content.Intent;
import android.os.Build;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.itingchunyu.reactnative.view.HybridActivity;
import com.itingchunyu.reactnative.view.MyReactActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    /**
     * 点击事件
     * @param view
     */
    public void onClick(View view){
        if (view.getId()==R.id.btn){
            start(new Intent(MainActivity.this, MyReactActivity.class));
        }else if(view.getId()==R.id.btn_hybrid){
            start(new Intent(MainActivity.this, HybridActivity.class));
        }
    }

    /**
     * 跳转
     * @param intent2
     */
    private void start(Intent intent2) {
        if (Build.VERSION.SDK_INT >= 23) {
            if (!Settings.canDrawOverlays(MainActivity.this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                startActivity(intent);
                return;
            } else {
                //绘ui代码, 这里说明6.0系统已经有权限了
                startActivity(intent2);
            }
        } else {
            //绘ui代码,这里android6.0以下的系统直接绘出即可
            startActivity(intent2);
        }
    }
}
