# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=averagehist
pkgname=vapoursynth-plugin-${_plug}
pkgver=r0
pkgrel=2
pkgdesc="Plugin for Vapoursynth: ${_plug}"
arch=('any')
url='http://forum.doom9.org/showthread.php?t=168521'
license=('GPL')
depends=('vapoursynth'
         'vapoursynth-plugin-histogram-git'
         )
source=('averagehist.py')
sha256sums=('728334aa284a87c123c1d4a91b6ec826c07c46d56754532743d6e18cc60d01de')

_site_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

package(){
  install -Dm644 "${_plug}.py" "${pkgdir}${_site_packages}/${_plug}.py"
  python -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/${_plug}.py"
  python -OO -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/${_plug}.py"
}
