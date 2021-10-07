# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=dgdecodenv
pkgbase=dgnvindex-bin
pkgname=('dgnvindex-bin'
         "vapoursynth-plugin-${_plug}-bin"
#          "avisynth-plugin-${_plug}-bin"
         )
pkgver=2.31
pkgrel=1
pkgdesc="AVC/HEVC/MPG/VC1 Decoder and Frame Server"
arch=('x86_64')
url='http://rationalqm.us/dgdecnv/dgdecnv.html'
license=('custom::Donald A. Graft')
provides=('dgnvindex'
          'vapoursynth-plugin-dgdecodenv'
          )
conflicts=('dgnvindex'
           'vapoursynth-plugin-dgdecodenv'
           )
source=("http://rationalqm.us/dgdecnv/binaries/dgdecnv_linux_${pkgver/./}.zip")
sha256sums=('b867550f31a2f50db48b1e69e6d37c5ccb04deac4e7216c0a634962c4b3c0971')

package_dgnvindex-bin() {
  pkgdesc="AVC/HEVC/MPG/VC1 Decoder and Frame Server"
  depends=('cuda')

  install -Dm755 dgindexnv "${pkgdir}/usr/bin/dgindexnv"

  install -Dm644 LinuxUserManual.txt "${pkgdir}/usr/share/doc/${pkgname}/LinuxUserManual.txt"
  install -Dm644 LinuxLimitations.txt "${pkgdir}/usr/share/doc/${pkgname}/LinuxLimitations.txt"
}

package_vapoursynth-plugin-dgdecodenv-bin() {
  pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
  depends=('vapoursynth'
           'cuda'
           )

  install -Dm755 libdgdecodenv.so "${pkgdir}/usr/lib/vapoursynth/libdgdecodenv.so"
  install -Dm644 LinuxUserManual.txt "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/LinuxUserManual.txt"
}

package_avisynth-plugin-dgdecodenv-bin() {
  pkgdesc="Plugin for Avisynth: ${_plug} (GIT version)"
  depends=('avisynthplus'
           'cuda'
           )

  install -Dm755 libdgdecodenv.so "${pkgdir}/usr/lib/avisynth/libdgdecodenv.so"
  install -Dm644 LinuxUserManual.txt "${pkgdir}/usr/share/doc/avisynth/plugins/${_plug}/LinuxUserManual.txt"
}