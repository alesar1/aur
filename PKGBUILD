# Maintainer: BrLi <brli at chakralinux dot org>

_pkgname=zdict
pkgname=python-$_pkgname
pkgver=3.7.0
pkgrel=1
pkgdesc="CLI dictionary framework mainly focus on any kind of online dictionary"
arch=('any')
url="https://github.com/zdict/zdict"
license=('GPL3')
depends=('python-beautifulsoup4' 'python-peewee' 'python-requests')
makedepends=('python-setuptools')
checkdepends=('python-pytest' 'python-pytest-cov' 'python-pytest-flake8' 'python-pyjokes')
# if not pass the check, try to force the version as in requirements-test.txt
_completion_commit=8698dc733b3174f5aac319234fec60dfa380a87e
source=("https://pypi.io/packages/source/z/zdict/$_pkgname-$pkgver.tar.gz"
        git+https://github.com/zdict/zdict.sh.git#commit=$_completion_commit)
sha256sums=('d2b3c00cf66515a601a8da3069608905691faa164225a6c09a7aca0ffc07d2bb'
            'SKIP')

build() {
  cd "$_pkgname-$pkgver"
  python setup.py build
}

check() {
  cd "$_pkgname-$pkgver/build"
  py.test
}

package() {
  cd "$_pkgname-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build

  # Install shell completion
  # Bash
  install -Dm644 "$srcdir/zdict.sh/zdict.bash-completion" "$pkgdir/usr/share/bash-completion/completions/zdict"
  # Zsh
  install -Dm644 "$srcdir/zdict.sh/zdict.plugin.zsh" "$pkgdir/usr/share/zsh/plugins/zdict/zdict.plugin.zsh"
  install -Dm644 "$srcdir/zdict.sh/_zdict" "$pkgdir/usr/share/zsh/site-functions/_zdict"
  # Fish
  install -Dm644 "$srcdir/zdict.sh/zdict.fish" "$pkgdir/usr/share/fish/completions/zdict.fish"
}
