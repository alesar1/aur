# Maintainer: Albert Graef <aggraef@gmail.com>
# Contributor: Ray Rashif <schiv@archlinux.org>
# Contributor: rtfreedman  (rob<d0t>til<d0t>freedman<aT>googlemail<d0t>com

pkgname=steinberg-vst36
pkgver=3.6.7
pkgrel=2
pkgdesc="Steinberg's VST SDK (version 3.6)"
arch=('any')
url="http://www.steinberg.net/en/company/developers.html"
license=('custom')
provides=('steinberg-vst')
source=("https://www.steinberg.net/sdk_downloads/vstsdk367_03_03_2017_build_352.zip"
	"aeffect.patch")
sha512sums=('54ed5101c4b1b07f2341c5c4440223f4de08f9a12b08cc335c5917297db74d1474ba84f06d0120f0b7ae074d9ad776250396269ac7617b69bbab7937c752e098'
            '571e841b6540bc55bc92333ddff0a67b09e47be03cec745c1ab543a8286c145bb2fe098551ccfb44bc1c04dc2bcaa522ac2cb460a12a7da3591e8e70c23439eb')

prepare() {
  cd "$srcdir/VST_SDK/VST2_SDK/"
  patch -p1 -i "${srcdir}/aeffect.patch"
}
package() {
  cd "$srcdir/VST_SDK/VST2_SDK/"

  # install headers
  mkdir -p "$pkgdir/usr/include/vst36/pluginterfaces/vst2.x"
  install -m644 public.sdk/source/vst2.x/* "$pkgdir/usr/include/vst36/"
  install -m644 pluginterfaces/vst2.x/* \
    "$pkgdir/usr/include/vst36/pluginterfaces/vst2.x/"

  # install license
  cd "$srcdir/VST_SDK/VST3_SDK/"
  mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
  install -m644 doc/*License* "$pkgdir/usr/share/licenses/$pkgname/"
}

# vim:set ts=2 sw=2 et:
