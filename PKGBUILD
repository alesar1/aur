# Maintainer:  Dave <orangechannel@pm.me>
# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=acsuite
pkgname=vapoursynth-tools-${_plug}-git
pkgver=4.1.1.r1.g808820a
pkgrel=1
pkgdesc="Frame-based cutting/trimming/splicing of audio with VapourSynth (GIT version)"
arch=('x86_64')
url='https://github.com/OrangeChannel/acsuite'
license=('Unlicense')
depends=('vapoursynth'
         'mkvtoolnix-cli'
         )
optdepends=('ffmpeg: WAV output support')
makedepends=('git'
             'python-setuptools'
             )
provides=("vapoursynth-tools-${_plug}"
          "vapoursynth-plugin-${_plug}-git"
          )
conflicts=("vapoursynth-tools-${_plug}"
           "vapoursynth-plugin-${_plug}-git"
           )
source=("${_plug}::git+https://github.com/OrangeChannel/acsuite.git")
sha256sums=('SKIP')

_site_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

pkgver() {
  cd "${_plug}"
  git describe --long | sed 's/^v//;s/-/.r/;s/-/./'
}

package(){
  cd "${_plug}"
  python setup.py install --root="$pkgdir/" --optimize=1

  install -Dm644 README.md "${pkgdir}/usr/share/doc/vapoursynth/tools/${_plug}/README.md"
  install -Dm644 UNLICENSE "${pkgdir}/usr/share/licenses/${pkgname}/UNLICENSE"
}
