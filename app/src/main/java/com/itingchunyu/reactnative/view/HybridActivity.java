package com.itingchunyu.reactnative.view;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.appcompat.BuildConfig;
import android.widget.LinearLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.itingchunyu.reactnative.R;

/**
 * Created by liyanxi on 2016/12/13.
 * Copyright (c) itingchunyu@163.com. All rights reserved.
 */

public class HybridActivity extends AppCompatActivity {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    private LinearLayout layoutReactContainer;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_second);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProject", null);

        layoutReactContainer= (LinearLayout) findViewById(R.id.layout_react);

        layoutReactContainer.addView(mReactRootView);
    }
}
