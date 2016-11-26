# $Id$
# Maintainer: José Luis Lafuente <jl@lafuente.me>

pkgname='python-pew_deps'
pkgver=0.1.24
_pythonz_ver=1.11.2
_resumableurl_ver=0.1.2
pkgrel=2

pkgdesc="Python Env Wrapper, a set of tools to manage multiple virtual environments, with its hard dependencies"
url="https://github.com/berdario/pew"
arch=('any')
license=('MIT')
depends=('python' 'python-virtualenv' 'python-virtualenv-clone')
makedepends=('python' 'python-setuptools')
optdepends=('libtinfo: for running pypy')
replaces=('python-pew' 'python-pythonz' 'python-pythonz-bd' 'python-resumable-urlretrieve')
conflicts=('python-pew' 'python-pythonz' 'python-pythonz-bd' 'python-resumable-urlretrieve')
source=("https://github.com/berdario/pew/archive/${pkgver}.tar.gz"
"https://github.com/berdario/resumable-urlretrieve/archive/${_resumableurl_ver}.tar.gz"
"https://pypi.python.org/packages/cb/e2/9ee252d6b105995b6c08e958f06466f135cc10cefe48b23c083b0049c0e6/pythonz-bd-${_pythonz_ver}.tar.gz"
)

_scripts_path='pew/shell_config'

package() {

  # ----- resumable-url
  cd "${srcdir}/resumable-urlretrieve-${_resumableurl_ver}"
  python3 setup.py build
  python3 setup.py install --prefix=/usr --root="${pkgdir}"

  # ------ pythonz
  cd "$srcdir/pythonz-bd-${_pythonz_ver}"
  python3 setup.py build
  python3 setup.py install --prefix=/usr --root="$pkgdir"

  # ----- pew
  cd "$srcdir/pew-$pkgver"
  python3 setup.py build
  python3 setup.py install --prefix=/usr --root="$pkgdir"

  # link to a version with 3 suffix as well
  ln "$pkgdir/usr/bin/pew" "$pkgdir/usr/bin/pew3"

  install -D -m644 $_scripts_path/complete.fish \
    "$pkgdir/usr/share/fish/completions/pew.fish"

  install -D -m644 $_scripts_path/complete.bash \
    "$pkgdir/usr/share/bash-completion/completions/pew"

  install -D -m644 $_scripts_path/complete.zsh \
    "$pkgdir/usr/share/zsh/site-functions/_pew"
}

md5sums=('e4f193687237173d90de216e71e95e64'
         'bf3969715c496aa7fdbb1717a1d7dc2b'
         '7080a6f4684e613c426d75f6af4097e0')

# vim:set ts=2 sw=2 et:
