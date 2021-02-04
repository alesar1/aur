# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=carvel-tools
pkgdesc="Set of Carvel (k14s) tools: ytt kbld kapp kwt imgpkg vendir"
pkgver=20210204
pkgrel=1
url="https://carvel.dev"
arch=(x86_64)
license=(Apache)
provides=(ytt kbld kapp kwt imgpkg vendir)
conflicts=(ytt kbld kapp kwt imgpkg vendir)

source=(
ytt-v0.31.0::https://github.com/vmware-tanzu/carvel-ytt/releases/download/v0.31.0/ytt-linux-amd64
kbld-v0.29.0::https://github.com/vmware-tanzu/carvel-kbld/releases/download/v0.29.0/kbld-linux-amd64
kapp-v0.35.0::https://github.com/vmware-tanzu/carvel-kapp/releases/download/v0.35.0/kapp-linux-amd64
kwt-v0.0.6::https://github.com/vmware-tanzu/carvel-kwt/releases/download/v0.0.6/kwt-linux-amd64
imgpkg-v0.4.0::https://github.com/vmware-tanzu/carvel-imgpkg/releases/download/v0.4.0/imgpkg-linux-amd64
vendir-v0.16.0::https://github.com/vmware-tanzu/carvel-vendir/releases/download/v0.16.0/vendir-linux-amd64
)
sha256sums=(
32e7cdc38202b49fe673442bd22cb2b130e13f0f05ce724222a06522d7618395
28492a398854e8fec7dd9537243b07af7f43e6598e1e4557312f5481f6840499
0f9d4daa8c833a8e245362c77e72f4ed06d4f0a12eed6c09813c87a992201676
92a1f18be6a8dca15b7537f4cc666713b556630c20c9246b335931a9379196a0
68f6798af67e62dc7ac738162db9e29ce428d41245d56c88fc041ed435376d49
05cede475c2b947772a9fe552380927054d48158959c530122a150a93bf542dd
)

package() {
install -Dm 755 "${srcdir}/ytt-v0.31.0" "${pkgdir}/usr/bin/ytt"
install -Dm 755 "${srcdir}/kbld-v0.29.0" "${pkgdir}/usr/bin/kbld"
install -Dm 755 "${srcdir}/kapp-v0.35.0" "${pkgdir}/usr/bin/kapp"
install -Dm 755 "${srcdir}/kwt-v0.0.6" "${pkgdir}/usr/bin/kwt"
install -Dm 755 "${srcdir}/imgpkg-v0.4.0" "${pkgdir}/usr/bin/imgpkg"
install -Dm 755 "${srcdir}/vendir-v0.16.0" "${pkgdir}/usr/bin/vendir"
}
