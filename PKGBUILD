# Maintainer: Avahe Kellenberger <avahe@protonmail.ch>
pkgname='nimdow-bin'
pkgver='0.5.1'
pkgrel='1'
pkgdesc="Tiling Window Manager written in Nim"
arch=('x86_64')
url="https://github.com/avahe-kellenberger/nimdow"
license=('GPL2')
source=("$url/releases/download/v$pkgver/nimdow")
md5sums=('9d2fcf1be7298b14dcfcd227a3536742')

install_default_config() {
  if [ -f "${XDG_CONFIG_HOME}/nimdow/config.toml" ] ||
     [ -f "${HOME}/.config/nimdow/config.toml" ]; then
    return
  else
    if [ -d "${XDG_CONFIG_HOME}" ]; then
      dir="${XDG_CONFIG_HOME}/nimdow"
    else
      dir="${HOME}/.config/nimdow"
    fi
    mkdir -p "$dir"
    curl "https://raw.githubusercontent.com/avahe-kellenberger/nimdow/master/config.default.toml" -o "${dir}/config.toml"
  fi
}

package() {
  install_default_config
  sudo install -Dt "/usr/bin" "nimdow"
}

