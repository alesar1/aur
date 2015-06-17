# Maintainer: M0Rf30 <morfeo89 [at] hotmail [dot] it>
# Contributor: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=leap-motion-sdk
_major=2.2.2
_build=24469
pkgver=${_major}
pkgrel=2
pkgdesc="The Leap Motion Developer SDK"
arch=('i686' 'x86_64')
url="https://developer.leapmotion.com/downloads"
optdepends=('leap-motion-driver: to install Playground and LeapControlPanel')
license=('custom')
source=(https://dl.dropboxusercontent.com/u/7226803/Leap_Motion_SDK_Linux_${_major}.tgz
	LICENSE)

package() {
  cd ${srcdir}/LeapDeveloperKit_${_major}+${_build}_linux

  # copy docs
  mkdir -p ${pkgdir}/usr/share/doc/${pkgname}/
  cp -r LeapSDK/docs/* ${pkgdir}/usr/share/doc/${pkgname}/

  # copy samples, util
  cp -r LeapSDK/{samples,util} ${pkgdir}/usr/share/doc/${pkgname}/

  # copy includes
  mkdir -p ${pkgdir}/usr/include/
  cp -r LeapSDK/include/* ${pkgdir}/usr/include/

  # copy libs
  mkdir -p ${pkgdir}/usr/lib/Leap

  cp LeapSDK/lib/{LeapJava.jar,Leap.py} ${pkgdir}/usr/lib/Leap

  if [ "$CARCH" == 'x86_64' ]; then
    cp LeapSDK/lib/x64/{LeapPython,libLeapCSharp,libLeapJava,libLeap}.so ${pkgdir}/usr/lib/Leap
  else
    cp LeapSDK/lib/x86/{LeapPython,libLeapCSharp,libLeapJava,libLeap}.so ${pkgdir}/usr/lib/Leap
  fi
  cp LeapSDK/lib/LeapCSharp.NET{3.5,4.0}.dll ${pkgdir}/usr/lib/Leap

  # Copy license
  install -D -m644 "${srcdir}"/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

md5sums=('3e3ceb48baa17a7aa4ce3149fac5eab3'
         '78a4f0934b105397d1f7b17d06e4717c')
