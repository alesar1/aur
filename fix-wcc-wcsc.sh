#!/bin/bash

package_dir="$NW_PACKAGE_DIR"
tmp_dir=$(mktemp -d)

mkdir "$tmp_dir/node_modules"
cd $tmp_dir && npm install miniprogram-compiler
# wcc wcsc
# 预览编译
# cd "${package_dir}/js/vendor/" && rm -rf "wcc.exe"
# cp "${package_dir}/node_modules_tmp/node_modules/miniprogram-compiler/bin/linux/wcc" "${package_dir}/js/vendor/wcc.exe"
# wcc_md5=$( md5sum wcc.exe|cut -d ' ' -f1 ) && \
# sed -i  's/wcc.exe": ".*"/wcc.exe": "'"${wcc_md5}"'"/g' "config.json"
# cd "${package_dir}/js/vendor/" && rm -rf "wcsc.exe"
# cp "${package_dir}/node_modules_tmp/node_modules/miniprogram-compiler/bin/linux/wcsc" "${package_dir}/js/vendor/wcsc.exe"
# cd "${package_dir}/js/vendor" && \
# wcsc_md5=$( md5sum wcsc.exe|cut -d ' ' -f1 ) && \
# sed -i  's/wcsc.exe": ".*"/wcsc.exe": "'"${wcsc_md5}"'"/g' "config.json"

# 可视化编译
(cd "${package_dir}/node_modules/" \
&& rm -rf wcc wcsc \
&& mkdir -p "wcc/bin/linux" "wcsc/bin/linux" \
&& cp -r "${tmp_dir}/node_modules/miniprogram-compiler/bin/linux/wcc" "wcc/bin/linux/wcc" \
&& cp -r "${tmp_dir}/node_modules/miniprogram-compiler/bin/linux/wcsc" "wcsc/bin/linux/wcsc" \
&& cp -r "${srcdir}/compiler/wcc_node"/* "wcc" \
&& cp -r "${srcdir}/compiler/wcsc_node"/* "wcsc"
)

rm -rf $tmp_dir