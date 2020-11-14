# Maintainer: Sukanka <su975853527 [AT] gmail.com>

pkgname=xunlei-bin
pkgver=1.0.0.1
pkgrel=5
pkgdesc="Xunlei download, 迅雷"
arch=("x86_64" "aarch64")
url="https://www.xunlei.com/"
license=("custom")
depends=('dbus-glib' 'nodejs' 'libxtst' 'gtk2' 'alsa-lib' 'nss' 'libxss')
provides=('xunlei')
source=("license.html::https://i.xunlei.com/xluser/privacy.html")
source_x86_64=("http://archive.kylinos.cn/kylin/partner/pool/com.xunlei.download_${pkgver}_amd64.deb")
source_aarch64=("http://archive.kylinos.cn/kylin/partner/pool/com.xunlei.download_${pkgver}_arm64.deb")

sha512sums=('7b3868f61d225e90617096859d1ab40a86bacab9b1b1e1c0a350c4946b64a4f1af2722046857602c84ea96ec7ea5ccc2f9592798f5061c91ac10cfc1f89ddfdd')
sha512sums_x86_64=(
    '8ed010593eb2d6cf94b8b5591c1bb69e259be501d3f1925874359058226c4bd3aebdbcbc3bf4b6c4c09f028db8e3d465fc939fd0bf710065a8593ffbc325f066'
)
sha512sums_aarch64=(
    'c656df9aeeab938a4e8e0cb2cbf9a2ad09dfddead081bb5f3d53cebd98492363164220aa3b9fab2bc187e3c54cc437ce4708367b2dd410bd2cea34646a0116ef'
)

prepare(){
    cd ${srcdir}
    tar -Jxvf data.tar.xz -C "${srcdir}"

}

package(){
    cd ${srcdir}
    mkdir -p ${pkgdir}/opt/xunlei
    mv opt/apps/com.xunlei.download/files/* ${pkgdir}/opt/xunlei
    
    install -D opt/apps/com.xunlei.download/entries/applications/com.xunlei.download.desktop \
        ${pkgdir}/usr/share/applications/com.xunlei.download.desktop
    
    mkdir -p ${pkgdir}/usr/share/
    mv opt/apps/com.xunlei.download/entries/icons  ${pkgdir}/usr/share/icons
    mv  ${pkgdir}/usr/share/icons/hicolor/scalable/apps/com.thunder.download.svg \
        ${pkgdir}/usr/share/icons/hicolor/scalable/apps/com.xunlei.download.svg
        
    install -Dm644 license.html ${pkgdir}/usr/share/licenses/xunlei/license.html
    
    sed -i '4c Exec=xunlei %U' ${pkgdir}/usr/share/applications/com.xunlei.download.desktop
    sed -i '5c Icon=com.xunlei.download' ${pkgdir}/usr/share/applications/com.xunlei.download.desktop
    sed -i '7c Categories=Network' ${pkgdir}/usr/share/applications/com.xunlei.download.desktop
    
    
    echo '''#!/bin/bash

export LD_LIBRARY_PATH=/opt/xunlei:$LD_LIBRARY_PATH
/opt/xunlei/thunder -start $1
''' >  ${pkgdir}/opt/xunlei/start.sh
    mkdir -p ${pkgdir}/usr/bin
    ln -s /opt/xunlei/start.sh ${pkgdir}/usr/bin/xunlei
    
}
