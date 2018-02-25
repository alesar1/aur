# Maintainer: Chris Warrick <aur@chriswarrick.com>
pkgname=python-doit
_pyname=doit
pkgver=0.31.0
pkgrel=1
pkgdesc='doit automation tool'
arch=('any')
url='http://pydoit.org/'
license=('MIT')
options=(!emptydirs)
source=("https://pypi.io/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
depends=('python' 'python-pyinotify' 'python-six' 'python-setuptools' 'python-cloudpickle')
md5sums=('4e6935453061d45149403a17b3af61a5')

package() {
  cd "${srcdir}/${_pyname}-${pkgver}"
  python3 setup.py install --root="${pkgdir}/" --optimize=1
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgbase}/LICENSE"
  ln -s ${_pyname} "${pkgdir}/usr/bin/${_pyname}3"
  install -D -m755 'zsh_completion_doit' "${pkgdir}/usr/share/zsh/site-functions/_${_pyname}"
  install -D -m755 'bash_completion_doit' "${pkgdir}/usr/share/bash-completion/completions/${_pyname}"
}

# vim:set ts=2 sw=2 et:
