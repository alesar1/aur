# Maintainer: Shen ZhongLi <szl921818@gmail.com>
# Maintainer: taotieren <admin@taotieren.com>
#mindmaster 中文版

pkgname=mindmaster_cn
_pkgname=MindMaster-8
pkgver=8.5.2
pkgrel=2
arch=('x86_64')
options=(!strip)
conflicts=("mindmaster" "mindmaster-cn")
pkgdesc="多功能，高颜值，易使用的专业思维导图软件"
license=('Commercial')
url="https://www.edrawsoft.cn/mindmaster/"
source_x86_64=("https://www.edrawsoft.cn/2download/x86_64/mindmaster_8.5.2_cn.x86_64.deb")
sha256sums_x86_64=("SKIP")
source=("mindmaster-cn.desktop")
sha256sums=('SKIP')

prepare() {
    export LC_ALL="zh_CN.UTF-8"
    ar -x *.deb
	mkdir -p ${pkgname}
    tar -xf "${srcdir}/data.tar.xz" --xattrs-include='*' --numeric-owner -C "${pkgname}"
}
package() {	
    export LC_ALL="zh_CN.UTF-8"
    mv  ${srcdir}/${pkgname}/* ${pkgdir}
    
    install -dm755 "${pkgdir}/usr/bin/" \
                    "${pkgdir}/usr/share/icons/" \
                    "${pkgdir}/usr/share/icons/hicolor/scalable/mimetypes/" \
                    "${pkgdir}/usr/share/mime/packages/"
    
    install -Dm644 "${srcdir}/mindmaster-cn.desktop" "${pkgdir}/opt/${_pkgname}/mindmaster.desktop"
    ln -sf "/opt/${_pkgname}/mindmaster.desktop" "${pkgdir}/usr/share/applications/mindmaster.desktop"
    ln -sf "/opt/${_pkgname}/MindMaster" "${pkgdir}/usr/bin/mindmaster"
    ln -sf "/opt/${_pkgname}/mindmaster.png" "${pkgdir}/usr/share/icons/mindmaster.png"
    ln -sf "/opt/${_pkgname}/emmx.svg" "${pkgdir}/usr/share/icons/hicolor/scalable/mimetypes/emmx.svg"
    ln -sf "/opt/${_pkgname}/mindmaster.xml" "${pkgdir}/usr/share/mime/packages/mindmaster.xml"
}

