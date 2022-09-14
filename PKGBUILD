# Maintainer: Claudia Pellegrino <aur ät cpellegrino.de>

pkgname=python-pip-audit-git
_gitpkgname=pip-audit
pkgver=r293.51e81a1
pkgrel=2
pkgdesc='A tool for scanning Python environments for known vulnerabilities'
arch=('any')
url='https://github.com/pypa/pip-audit'
license=('Apache')
depends=(
  'python-cachecontrol'
  'python-cyclonedx-lib'
  'python-dataclasses'
  'python-html5lib'
  'python-lockfile'
  # Upstream requires pip-api >= 0.0.28 but Arch’s Community
  # repository is on 0.0.22, which causes an error message that
  # says “failed to list installed distributions.”
  # Once community/python-pip-api catches up to version 0.0.28,
  # remove the `>=0.0.28` part from the following line.
  'python-pip-api>=0.0.28'
  'python-pip-requirements-parser'
  'python-progress'
  'python-resolvelib'
  'python-rich'
)
makedepends=(
  'git'
  'python-build'
  'python-flit'
  'python-installer'
  'python-wheel'
)
conflicts=('python-pip-audit')
provides=('python-pip-audit')
options=('!strip')
source=("${_gitpkgname}::git+https://github.com/pypa/pip-audit.git")
sha512sums=('SKIP')

pkgver() {
  printf "r%s.%s" \
    "$(git -C "${_gitpkgname}" rev-list --count HEAD)" \
    "$(git -C "${_gitpkgname}" rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_gitpkgname}"
  python -m build --wheel --no-isolation
}

package() {
  cd "${srcdir}/${_gitpkgname}"
  python -I -m installer --destdir="${pkgdir}" dist/*.whl
  install -D -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE
}
