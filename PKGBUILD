# Maintainer: Shen ZhongLi <szl921818@gmail.com>
# Maintainer: taotieren <admin@taotieren.com>
#mindmaster 中文版

pkgname=mindmaster_cn
pkgver=8.0.2
pkgrel=1
arch=('x86_64')
options=(!strip)
conflicts=("mindmaster")
pkgdesc="多功能，高颜值，易使用的专业思维导图软件"
license=('Commercial')
url="https://www.edrawsoft.cn/mindmaster/"
source_x86_64=("https://www.edrawsoft.cn/2download/x86_64/mindmaster_8.0.2_cn_x86_64.deb")
sha256sums_x86_64=('20c475284cddc0d45c87c1d75016ab395b4b4842c01361269d4b81da23c45b47')

package() {	
    cd "${pkgdir}"
    tar xf "${srcdir}/data.tar.xz"
    
    mkdir -p ${pkgdir}/usr/bin
    mkdir -p ${pkgdir}/usr/share/icons
    mkdir -p ${pkgdir}/usr/share/icons/hicolor/scalable/mimetypes
    mkdir -p ${pkgdir}/usr/share/mime/packages
    
    ln -f -s /opt/MindMaster-8/MindMaster "${pkgdir}/usr/bin/mindmaster"
    
    ln -f -s /opt/MindMaster-8/mindmaster.png "${pkgdir}/usr/share/icons/mindmaster.png"
    
    ln -f -s /opt/MindMaster-8/emmx.svg "${pkgdir}/usr/share/icons/hicolor/scalable/mimetypes/emmx.svg"
    
    ln -f -s /opt/MindMaster-8/mindmaster.xml "${pkgdir}/usr/share/mime/packages/mindmaster.xml"
    
#    cp /usr/lib/qt/plugins/platforminputcontexts/libfcitxplatforminputcontextplugin.so "${pkgdir}/opt/MindMaster-8/plugins/platforminputcontexts/"
    
}
