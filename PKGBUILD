# Maintainer: taotieren <admin@taotieren.com>

pkgbase=chipon
pkgname=($pkgbase{,-jre,-ide32,-program32,-cc32,-driver,-usart-async2,-librxtx,-rxtx-2})
pkgver=1.0.17
pkgrel=7
arch=('x86_64')
url='https://www.chipon-ic.com'
license=('unknow')
groups=('chipon')
#provides=()
#conflicts=()
depends=()
makedepends=('unarchiver')

source=("${pkgbase}.zip::${url}/upload/file/20210413/67c90ef0-da85-4f9c-aacd-4e1056f0d1c8.zip"
        "${pkgbase}.png::${url}/images/logo.png"
        "chipon-program32.install"
        "chipon-driver.install")

sha256sums=('c0a4469b78618712c75802a33a06f64f8f01bec1b6629af75a85095f8f8ecbc1'
            '2879a8063a7037ca8658ffcb96c8611274decc3c0fe2a97a5918f896451b7dbd'
            '6a2196796a9cf54f0696a2ee3621d5b8af8bc5aa24aee40bc8f6d9309639fac8'
            'e7ab8cea2aacbda3122e15da4c9d0833784f2c84f9b93333705e24b6056e8d34')

prepare() {
    unar -e GBK "${srcdir}/${pkgbase}.zip"
    unar -e GBK "${srcdir}/I01 jre1.7u80_rxtx.zip"
    unar -e GBK "${srcdir}/I02 ChipONCC32_${pkgver}.zip"
    unar -e GBK "${srcdir}/I02 chiponide32_${pkgver}.zip"
    unar -e GBK "${srcdir}/I03 chiponprogram32_${pkgver}.zip"
    unar -e GBK "${srcdir}/I04 Driver.zip"
    unar -e GBK "${srcdir}/I04 USART_Async2.zip"
    unar -e GBK "${srcdir}/I04 librxtx-linux-x64.zip"
    unar -e GBK "${srcdir}/I04 rxtx-2.2pre2.zip"
}

package_chipon() {
    pkgdesc="KungFu32 系列 32 位 MCU 设计的 IDE（集成开发环境)，内置编译器、汇编器，支持调试。KungFu32 产品上位机编程软件，支持查空、读取、编程、在线编程、脱机编程、自增编程等；支持加载并查看修改 HEX 文件等操作。"
    depends=($pkgbase{-jre,-ide32,-program32,-cc32,-driver,-usart-async2,-librxtx,-rxtx-2})
}

package_chipon-jre() {
    pkgdesc="KungFu32 产品上位机编程软件， JRE 运行环境"

    _pkgname="jre"

    install -dm755 "${pkgdir}/opt/${pkgbase}" \
                   "${pkgdir}/opt/${pkgbase}/chiponide32" \
                   "${pkgdir}/opt/${pkgbase}/chiponprogram32"

    cp -r "${srcdir}/${_pkgname}" "${pkgdir}/opt/${pkgbase}"
    ln -sf "/opt/${pkgbase}/${_pkgname}" "${pkgdir}/opt/${pkgbase}/chiponide32/jre"
    ln -sf "/opt/${pkgbase}/${_pkgname}" "${pkgdir}/opt/${pkgbase}/chiponprogram32/jre"
}

package_chipon-ide32() {
    export LC_CTYPE="zh_CN.UTF-8"
    pkgdesc="KungFu32 系列 32 位 MCU 设计的 IDE（集成开发环境)，内置编译器、汇编器，支持调试"
    _pkgname="chiponide32"

    install -dm755 "${pkgdir}/opt/${pkgbase}"

    cp -r "${srcdir}/${pkgbase}/01 ChipON KungFu32 开发工具安装Linux版 V1.1.pdf" "${pkgdir}/opt/${pkgbase}/01 ChipON KungFu32 开发工具安装Linux版 V1.1.pdf"
    cp -r "${srcdir}/${pkgbase}/ChipON KF32 Linux系统免IDE工具使用说明文档V1.2.pdf" "${pkgdir}/opt/${pkgbase}/ChipON KF32 Linux系统免IDE工具使用说明文档V1.2.pdf"
    cp -r "${srcdir}/${_pkgname}" "${pkgdir}/opt/${pkgbase}"

    install -Dm644 "${srcdir}/${pkgbase}.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"

    install -Dm755 /dev/stdin "${pkgdir}/usr/bin/${_pkgname}" << EOF
#!/bin/env bash
export JAVA_HOME=/opt/${pkgbase}/${_pkgname}/jre
export KungFu32Tool_HOME=/opt/${pkgbase}/ChipONCC32
export PATH=$JAVA_HOME:$KungFu32Tool_HOME:$PATH
/opt/${pkgbase}/${_pkgname}/${_pkgname}
EOF

    install -Dm644 /dev/stdin "$pkgdir/usr/share/applications/${_pkgname}.desktop" << EOF
[Desktop Entry]
Version=${pkgver}
Name=${_pkgname}
Comment=${_pkgname}
GenericName=${_pkgname}
Exec=env GDK_BACKEND=x11 ${_pkgname} %F
Icon=${_pkgname}.png
Path=/opt/${pkgbase}/${_pkgname}
Terminal=false
StartupNotify=true
Type=Application
Categories=Development
EOF

}

package_chipon-program32() {
    pkgdesc="KungFu32 产品上位机编程软件，支持查空、读取、编程、在线编程、脱机编程、自增编程等；支持加载并查看修改 HEX 文件等操作。"
    depends=("uucp")
    install=chipon-program32.install
    _pkgname="chiponprogram32"

    install -dm755 "${pkgdir}/opt/${pkgbase}"
    install -dm777 "${pkgdir}/opt/${pkgbase}/kf32pro_ws"

    cp -r "${srcdir}/${_pkgname}" "${pkgdir}/opt/${pkgbase}"

    install -Dm644 "${srcdir}/${pkgbase}.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"

    install -Dm755 /dev/stdin "${pkgdir}/usr/bin/${_pkgname}" << EOF
#!/bin/env bash
export JAVA_HOME=/opt/${pkgbase}/${_pkgname}/jre
export KungFu32Tool_HOME=/opt/${pkgbase}/ChipONCC32
export PATH=$JAVA_HOME:$KungFu32Tool_HOME:$PATH
/opt/${pkgbase}/${_pkgname}/${_pkgname}
EOF

    install -Dm644 /dev/stdin "$pkgdir/usr/share/applications/${_pkgname}.desktop" << EOF
[Desktop Entry]
Version=${pkgver}
Name=${_pkgname}
Comment=${_pkgname}
GenericName=${_pkgname}
Exec=env GDK_BACKEND=x11 ${_pkgname} %F
Icon=${_pkgname}.png
Path=/opt/${pkgbase}/${_pkgname}
Terminal=false
StartupNotify=true
Type=Application
Categories=Development
EOF

}

package_chipon-cc32() {
    pkgdesc="KungFu32 系列 32 位 MCU 设计的 IDE（集成开发环境)的编译器、汇编器，支持调试"

    _pkgname="ChipONCC32"

    install -dm755 "${pkgdir}/opt/${pkgbase}"

    cp -r "${srcdir}/${_pkgname}" "${pkgdir}/opt/${pkgbase}"
}

package_chipon-driver() {
    pkgdesc="KungFu32 产品上位机编程软件的驱动（udev rules）"
    install=chipon-driver.install

    _pkgname="Driver"

    install -Dm644 "${srcdir}/${_pkgname}/49-kungfu32_udev.rules" "${pkgdir}/usr/lib/udev/rules.d/49-kungfu32_udev.rules"

    install -dm755 "${pkgdir}/etc/udev/rules.d/"
    ln -sf "/usr/lib/udev/rules.d/49-kungfu32_udev.rules" "${pkgdir}/etc/udev/rules.d/49-kungfu32_udev.rules"
}

package_chipon-usart-async2() {
    pkgdesc="KungFu32 USART Demo"

    _pkgname="USART_Async2"

    install -dm755 "${pkgdir}/opt/${pkgbase}" \

    cp -r "${srcdir}/${_pkgname}" "${pkgdir}/opt/${pkgbase}"
}

package_chipon-librxtx() {
    pkgdesc="KungFu32 产品上位机编程软件，RXTX 操作库: IDE 和 PRO 软件使用编程调试器或串口实现和芯片的数据交换"

    _pkgname="I04 librxtx-linux-x64"

    install -dm755 "${pkgdir}/opt/${pkgbase}" \
                   "${pkgdir}/opt/${pkgbase}/jre/lib/amd64"

    cp -r "${srcdir}/${_pkgname}" "${pkgdir}/opt/${pkgbase}"

    for so in "${pkgdir}/opt/${pkgbase}/${_pkgname}/*.{so,la}"; do
        ln -sf "/opt/${pkgbase}/${_pkgname}/$so" "${pkgdir}/opt/${pkgbase}/jre/lib/amd64"
    done
}

package_chipon-rxtx-2() {
    pkgdesc="KungFu32 产品上位机编程软件，RXTX jar 操作库: IDE 和 PRO 软件使用编程调试器或串口实现和芯片的数据交换"

    _pkgname="rxtx-2.2pre2"

    install -dm755 "${pkgdir}/opt/${pkgbase}" \
                   "${pkgdir}/opt/${pkgbase}/jre/lib"

    cp -r "${srcdir}/${_pkgname}" "${pkgdir}/opt/${pkgbase}"
    ln -sf "/opt/${pkgbase}/${_pkgname}/RXTXcomm.jar" "${pkgdir}/opt/${pkgbase}/jre/lib/RXTXcomm.jar"
}
