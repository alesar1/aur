# Maintainer: Sukanka<su975853527 AT gmail.com>
pkgname=svstudio-bin
_pkgname=svstudio
pkgver=1.4.0
pkgrel=1
pkgdesc="Synthesizer V Studio, a high-quality singing synthesis software."
url="https://dreamtonics.com"
arch=('x86_64')
license=('custom')
depends=('libcurl-gnutls' 'webkit2gtk')
provides=("svstudio")
source=(
    "${_pkgname}-${pkgver}.zip::http://synthv-1252644241.file.myqcloud.com/svstudio/${pkgver}/svstudio-basic-linux64-${pkgver}c.zip"
    'svstudio.svg'
)
sha512sums=('e22e23d465d39936fefdcebe88f18148e6f7fbf956ed1c8cc659a63c5679e7d8ec1047181fd9b30157bbb25f539186aad0c7ad757987cb556a35709bac30ac10'
            'ee2fbe1a3d4c63f2fed31368396c4b3315fbe01368341ce73d7d4c1cb5e0fe3d9f529083ce45890a860624debc57543e2a873940c4fa14135f4e5f013d88cde2')
install=svstudio-bin.install
package(){
    cd "${srcdir}"
    
    mkdir -p ${pkgdir}/opt
    mv "Synthesizer V Studio Basic" ${pkgdir}/opt/${_pkgname}
    cd ${pkgdir}/opt/${_pkgname}
    
    mkdir -p ${pkgdir}/usr/bin
    ln -s /opt/${_pkgname}/synthv-studio ${pkgdir}/usr/bin/svstudio
    
    
    mkdir -p ${pkgdir}/usr/share/licenses/${_pkgname}
    mv *.txt ${pkgdir}/usr/share/licenses/${_pkgname}
    mv docs/third-party ${pkgdir}/usr/share/licenses/${_pkgname}
    mkdir -p ${pkgdir}/opt/${_pkgname}/docs
    ln -s /usr/share/licenses/${_pkgname}/third-party ${pkgdir}/opt/${_pkgname}/docs/third-party
    
    rm -rf license 
    
    echo  '''[Desktop Entry]
Name=svstudio
Comment=a high-quality singing synthesis software
Exec=svstudio %f
Terminal=false
Type=Application
Icon=/usr/share/icon/hicolor/scalable/apps/svstudio.svg
MimeType=application/tup;
Categories=AudioVideo;Audio;AudioVideoEditing;
Name[zh_CN.utf8]=svstudio.desktop
''' > svstudio.desktop

    install -D svstudio.desktop  ${pkgdir}/usr/share/applications/svstudio.desktop
    install -D ${srcdir}/svstudio.svg   ${pkgdir}/usr/share/icon/hicolor/scalable/apps/svstudio.svg
}
