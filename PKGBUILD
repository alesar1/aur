# Maintainer: Bruno Inec <brunoinec at gmail dot com>
pkgname=wtfutil
pkgver=0.2.2
pkgrel=1
pkgdesc="Personal information dashboard for your terminal"
arch=(x86_64)
url="https://wtfutil.com"
license=(MIT)
source_x86_64=("https://github.com/senorprogrammer/wtf/releases/download/${pkgver}/wtf_${pkgver}_linux_amd64.tar.gz")
sha256sums_x86_64=('6ab6ce9b23a2fb4fb1922bc9c2f1b1c9cadda1cbfec717df8bc1a8a7a97317f0')

package(){
  install -D "${srcdir}/wtf_${pkgver}_linux_amd64/wtf" "${pkgdir}/usr/bin/wtfutil"
}
