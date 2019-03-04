# Maintainer: redfish <redfish@galactica.pw>

pkgname=python-ipfshttpclient-git
_reponame=py-ipfs-api
_name=ipfshttpclient
pkgver=0.4.3
pkgrel=1
pkgdesc="Python IPFS API client library"
arch=('any')
provides=("python-ipfshttpclient=$pkgver")
conflicts=("python-ipfshttpclient" "python-ipfsapi")
url="https://pypi.python.org/pypi/ipfsapi"
license=('MIT')
depends=('python'
         'python-requests'
         'python-setuptools'
	 'flit'
        )
checkdepends=('python-pytest' 'python-pytest-cov' 'python-pytest-ordering' 'python-pytest-mock'
	      'python-pytest-localserver' 'python-pluggy' 'python-py')
optdepends=('go-ipfs: IPFS daemon') # an IPFS deamon is a checkdepend, but not required to be go-ipfs
source=("git+https://github.com/ipfs/py-ipfs-api#branch=py-ipfs-http-client")
sha256sums=('SKIP')

prepare() {
    cd $srcdir/$_reponame

    git remote add up https://github.com/ipfs/$_reponame
    git pull --no-edit up refs/pull/173/head  # pin ls path args
    git pull --no-edit up refs/pull/174/head  # offline mode
    git pull --no-edit up refs/pull/175/head  # fix files.cp assert fail
}

pkgver() {
    cd $_reponame

    local _ver=$(sed -n 's/__version__ = "\([^"]\+\)"/\1/p'  $_name/version.py)
    if git rev-parse $_ver 2>/dev/null 1>/dev/null
    then
	local _num=$(git describe --tags --long | sed -n 's/^[^-]\+-\([0-9]+\)-[^-]\+/\1/p')
    else
	local _num=0  # relese not tagged, so don't know cmmmit height from last tag
    fi
    printf "%s.r%u.g%s" $_ver $_num $(git rev-parse --short HEAD)
}

check() {
    cd $srcdir/$_reponame

    # To exclude tests pass: -k 'not test_name'
    ./test/run-tests.py
}

package() {
    cd "$srcdir/$_reponame"

    local _ver=$(echo $pkgver | sed -n 's/^\(.*\)\.r[0-9]\+\.g[0-9a-f]\+$/\1/p')

    flit build
    cd dist/
    tar xf ${_name}-${_ver}.tar.gz
    cd  ${_name}-${_ver}
    python setup.py install --prefix="$pkgdir/usr" --optimize=1
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
