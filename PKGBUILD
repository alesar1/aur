_pypiname="delegator.py"
pkgbase="python-$_pypiname"
pkgname=("python-$_pypiname" "python2-$_pypiname")
pkgver=0.0.8
pkgrel=1
source=("https://github.com/kennethreitz/delegator.py/archive/v$pkgver.tar.gz")
license=("MIT")
arch=("any")

build() {
    cd "$srcdir/$_pypiname-$pkgver"
    echo ')' >> setup.py  # wtf
    cd "$srcdir"
    cp -r "$_pypiname-$pkgver" "$_pypiname-$pkgver-py2"
}

package_python-delegator.py() {
    depends=("python" "python-pexpect")
    cd "$srcdir/$_pypiname-$pkgver"
    python setup.py install --prefix="/usr" --root="$pkgdir" -O1
}

package_python2-delegator.py() {
    depends=("python2" "python2-pexpect")
    cd "$srcdir/$_pypiname-$pkgver-py2"
    python2 setup.py install --prefix="/usr" --root="$pkgdir" -O1
}
sha256sums=('e4cd3c831f42b9b380171c038edad9da7efc2a0afb41ca4ea43d12d6b535749a')
