import os
import re
import sys
from pathlib import Path
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


def humansize(nbytes):
    suffixes = ["B", "KB", "MB", "GB", "TB", "PB"]
    i = 0
    while nbytes >= 1024 and i < len(suffixes) - 1:
        nbytes /= 1024.0
        i += 1
    f = ("%.2f" % nbytes).rstrip("0").rstrip(".")
    return "%s %s" % (f, suffixes[i])


def message(msg):
    _bar = "\u2588"
    sys.stdout.write(_bar + "\r" + msg)


def wait_downloading():
    timeout_start = 60
    timeout_download = 60 * 5

    def tar_exist():
        return (
            lst_files[0]
            if (lst_files := list(Path(".").glob("*.tar.gz"))) and lst_files[0].stat().st_size > 0
            else None
        )

    if not (tar_name := tar_exist()):
        while not list(Path(".").glob("*.part")) and timeout_start:
            message(f"waiting for download to start {timeout_start} sec.")
            sleep(1)
            timeout_start -= 1

        if not list(Path(".").glob("*.part")):
            raise Exception("Download failed")

        while (tmp_files := list(Path(".").glob("*.part"))) and timeout_download:
            filesize = os.path.getsize(tmp_files[0])
            message(f"Downloading file: {humansize(filesize)} wait {timeout_download} sec.")
            sleep(1)
            timeout_download -= 1

        if not (tar_name := tar_exist()):
            raise Exception("Download failed")

    message("Downloading complete\n")
    return tar_name


options = webdriver.FirefoxOptions()
options.headless = True
options.set_preference("browser.download.folderList", 2)
options.set_preference("browser.download.manager.showWhenStarting", False)
options.set_preference("browser.download.dir", os.getcwd())
options.set_preference("browser.helperApps.neverAsk.saveToDisk", "application/octet-stream")


try:
    print("Selenium start..")
    browser = webdriver.Firefox(options=options)

    print("Searching url..")
    browser.get(
        "https://supportportal.gemalto.com/csm?id=kb_article_view&sysparm_article=KB0018315#"
    )

    wait = WebDriverWait(browser, 10)
    element = wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "DOW0003342")))
    element.click()
    element = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".btn-success")))
    element.click()

    _ldk_filename = wait_downloading()
except Exception as error:
    print(error)
    sys.exit(1)
finally:
    browser.quit()

match = None
os.system(f"tar --strip-components=1 -xvzf {_ldk_filename}")
for root, dirs, files in os.walk(os.getcwd()):
    for file in files:
        if match := re.match(r"aksusbd-(\d+\.\d+)\.(\d+)", file):
            _vers, _rel = match.groups()
            os.system(f'echo "{_vers} {_rel}">version.txt')
            sys.exit(0)
if not match:
    sys.exit(1)
