# Maintainer: Joffrey Darcq <j-off@live.fr>
# Contributor: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Edvinas Valatka <edacval@gmail.com>
# Contributor: Aaron Lindsay <aaron@aclindsay.com>

pkgname='seahub'
pkgver=6.2.5
pkgrel=4
pkgdesc='The web frontend for seafile server'
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/haiwen/${pkgname}"
license=('Apache' 'PSF' 'MIT' 'BSD' 'GPL')
depends=("seafile-server=${pkgver}" 'libmemcached' 'libmariadbclient')
optdepends=('memcached' 'mariadb')
makedepends=('python2-virtualenv')
install="${pkgname}.install"
changelog="ChangeLog"
source=("${pkgname}-${pkgver}-server.tar.gz::${url}/archive/v${pkgver}-server.tar.gz")
sha256sums=('80a7a1cadde8e8e570bdc454bc4a4902ebcace97b347f9eef701b5ab02742039')
options=("!strip")

prepare () {
    cd "${srcdir}/${pkgname}-${pkgver}-server"

    # Use python lib seahub interpreter for all scripts
    grep -s -l -r '#!/usr/bin/env python' "./" \
    | xargs sed -i -e '1 s|#!/usr/bin/env python|#!/usr/lib/seahub/bin/python2|'

    # Add python utils modules to requirements.txt
    {
        echo 'flup'             # WSGI support
        echo 'MySQL-python'     # MySQL support
        echo 'pylibmc'          # Memcached support
        echo 'django-pylibmc'   # Memcached support
    } >> "./requirements.txt"
}

package() {
    cd "${srcdir}/seahub-${pkgver}-server/"

    # Install seahub
    install -dm755 "${pkgdir}/usr/share/seafile-server/seahub" 
    cp -r -p "./"* "${pkgdir}/usr/share/seafile-server/seahub/"

    # Create VirtualEnv 
    venv="${pkgdir}/usr/lib/seahub"
    virtualenv2 --no-wheel --system-site-packages "${venv}"

    # Activates the VirtualEnv
    source "${venv}/bin/activate"

    # Fix subprocess exception if gunicorn is already installed
    printf 'Installing gunicorn...'
    pip2 install --isolated --no-compile --upgrade --force-reinstall gunicorn > /dev/null && \
    printf 'done.\n'

    # Install requirements
    pip2 install --isolated --no-compile -r "./requirements.txt"
    
    deactivate  # Deactivate VirtualEnv

    # Use relative path
    virtualenv2 --relocatable "${venv}"

    # Recompile all .pyc files in venv. Not stricly required
    # But useful for printing valid source file paths in case of python exceptions.
    # Requires minimum 1GB RAM, comment next two commands in case of < 1GB RAM
    printf "Compile all .py in %s/..." "${venv}/bin"
    python2 -m compileall \
            -q -f -d "${venv#$pkgdir}/bin" \
            -- "${venv}/bin" && \
    printf 'done.\n'

    # _gaiohttp.py excluded due to https://github.com/benoitc/gunicorn/issues/810
    printf "Compile all .py in %s/..." "${venv}/lib/python2.7"
    python2 -m compileall \
            -q -f -d "${venv#$pkgdir}/lib/python2.7" \
            -x '.*/gunicorn/workers/_gaiohttp.py' \
            -- "${venv}/lib/python2.7" && \
    printf 'done.\n'
}
